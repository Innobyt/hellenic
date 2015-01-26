(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('disbursementmaintenanceCreateCtrl', disbursementmaintenanceCreateCtrl);
	
	disbursementmaintenanceCreateCtrl.$inject=['$scope', 'disbursementmaintenance', 'vesseltable', 'customertable', 'expensetable'];

	function disbursementmaintenanceCreateCtrl($scope, disbursementmaintenance, vesseltable, customertable, expensetable) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of disbursementmaintenance
			$scope.formData = new disbursementmaintenance();
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

		// submit disbursement maintenance form
		$scope.submit = function() {
			// perform CRUD operations save
			$scope.formData.$save(function(){ $scope.initialize(); });
		};

		$scope.initialize();
	}
})();