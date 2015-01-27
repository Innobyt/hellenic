(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('normalbillingmaintenanceCreateCtrl', normalbillingmaintenanceCreateCtrl);
	
	normalbillingmaintenanceCreateCtrl.$inject=['$scope', 'normalbillingmaintenance', 'vesseltable', 'customertable', 'expensetable'];

	function normalbillingmaintenanceCreateCtrl($scope, normalbillingmaintenance, vesseltable, customertable, expensetable) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of normalbillingmaintenance
			$scope.formData = new normalbillingmaintenance();
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
		};

		// submit normal billing maintenance form
		$scope.submit = function() {
			// perform CRUD operations save
			$scope.formData.$save(function(){ $scope.initialize(); });
		};

		$scope.initialize();
	}
})();