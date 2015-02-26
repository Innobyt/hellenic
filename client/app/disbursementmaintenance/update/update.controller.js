(function() {
	'use strict';

	angular.module('hellenicApp')
		.controller('disbursementmaintenanceUpdateCtrl', disbursementmaintenanceUpdateCtrl);

	disbursementmaintenanceUpdateCtrl.$inject = ['$scope', '$stateParams', '$state', 'disbursementmaintenance', 'vendortable', 'vesseltable', 'customertable', 'expensetable'];

	function disbursementmaintenanceUpdateCtrl($scope, $stateParams, $state, disbursementmaintenance, vendortable, vesseltable, customertable, expensetable) {


		// initialise Selected Vessel
		$scope.selectedVessel = {};

		// initialise Selected Customer
		$scope.selectedCustomer = {};

		// initialise Selected Vendor
		$scope.selectedVendor = {};

		// initialise Selected Accode
		$scope.selectedAccode = {};


		// initialize create controller
		$scope.initialize = function() {

			// get vesseltable collection from the factory
			vesseltable.view().$promise.then(
				function(response) {
					$scope.vessels = response;
				});
			// get customertable collection from the factory
			customertable.view().$promise.then(
				function(response) {
					$scope.customers = response;
				});
			// get expensetable collection from the factory
			expensetable.view().$promise.then(
				function(response) {
					$scope.expenses = response;
				});
			// get vendortable collection from the factory
			vendortable.view().$promise.then(
				function(response) {
					$scope.vendors = response;
				});

			// get a disbursementmaintenance object from the factory
			disbursementmaintenance.query({
				id: $stateParams.id
			}).$promise.then(
				function(response) {
					$scope.formData = response;
					$scope.selectedVessel.number = response.vessel_number;
					$scope.selectedVessel.name = response.vessel_name;
					$scope.selectedCustomer.number = response.customer_number;
					$scope.selectedCustomer.name = response.customer_name;
					$scope.selectedVendor.number = response.vendor_acno;
					$scope.selectedVendor.name = response.vendor_name;
					$scope.selectedAccode.accode = response.expense_accode;
					$scope.selectedAccode.desc = response.desc;
				});
		};

		$scope.submit = function() {
			// perform CRUD operations update
			$scope.formData.$update({
				id: $stateParams.id
			}, function() {
				$state.go('list_disbursementmaintenance');
			});
		};
		$scope.initialize();
	}
})();