(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('billingmaintenancedebitCreateCtrl', billingmaintenancedebitCreateCtrl);
	
	billingmaintenancedebitCreateCtrl.$inject=['$scope', 'billingmaintenancedebit', 'vesseltable' , 'customertable', 'expensetable'];

	function billingmaintenancedebitCreateCtrl($scope, billingmaintenancedebit, vesseltable, customertable, expensetable) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of billingmaintenancedebit
			$scope.formData = new billingmaintenancedebit();
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

		// submit customer table form
		$scope.submit = function() {
			// perform CRUD operations save
			$scope.formData.$save(function(){ $scope.initialize(); });
		};

		$scope.initialize();
	}
})();