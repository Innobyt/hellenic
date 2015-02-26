(function() {
	'use strict';

	angular.module('hellenicApp')
		.controller('disbursementmaintenanceCreateCtrl', disbursementmaintenanceCreateCtrl);

	disbursementmaintenanceCreateCtrl.$inject = ['$scope', 'disbursementmaintenance', 'vesseltable', 'customertable', 'expensetable', 'vendortable'];

	function disbursementmaintenanceCreateCtrl($scope, disbursementmaintenance, vesseltable, customertable, expensetable, vendortable) {


		// initialize create controller
		$scope.initialize = function() {

			// create new instance of disbursementmaintenance
			$scope.formData = new disbursementmaintenance();

			$scope.formData.cost = 0.00;

			$scope.formData.gst_percentage = 0.00;

			// initialise Selected Vessel
			$scope.selectedVessel = {};

			// initialise Selected Customer
			$scope.selectedCustomer = {};

			// initialise Selected Vendor
			$scope.selectedVendor = {};

			// initialise Selected Accode
			$scope.selectedAccode = {};

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
		};

		// submit disbursement maintenance form
		$scope.submit = function() {
			$scope.formData.cost = $scope.formData.billing;
			$scope.formData.vessel_number = $scope.selectedVessel.number;
			$scope.formData.vessel_name = $scope.selectedVessel.name;
			$scope.formData.customer_number = $scope.selectedCustomer.number;
			$scope.formData.customer_name = $scope.selectedCustomer.name;
			$scope.formData.vendor_acno = $scope.selectedVendor.number;
			$scope.formData.vendor_name = $scope.selectedVendor.name;
			$scope.formData.expense_accode = $scope.selectedAccode.accode;
			$scope.formData.desc = $scope.selectedAccode.desc;

			// perform CRUD operations save
			$scope.formData.$save(function() {
				$scope.initialize();
			});
		};

		$scope.initialize();
	}
})();