(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('normalbillingmaintenanceUpdateCtrl', normalbillingmaintenanceUpdateCtrl);
	
	normalbillingmaintenanceUpdateCtrl.$inject=['$scope', '$stateParams', 'normalbillingmaintenance', 'vesseltable', 'customertable', 'expensetable'];

	function normalbillingmaintenanceUpdateCtrl($scope, $stateParams, normalbillingmaintenance, vesseltable, customertable, expensetable) {

		// get a normalbillingmaintenance object from the factory
		$scope.normalbillingmaintenance = normalbillingmaintenance.query({ id: $stateParams.id });
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

		// initialize update controller
		$scope.initialize = function(){
			// create new instance of normalbillingmaintenance
			$scope.formData = new normalbillingmaintenance();
		};

		$scope.submit = function() {
			// perform CRUD operations update
			$scope.formData.$update({ id: $stateParams.id }, function(){ 
				$scope.initialize(); 
			});
		};

		$scope.initialize();
	}
})();

