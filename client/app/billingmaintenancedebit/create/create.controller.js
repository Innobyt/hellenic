(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('billingmaintenancedebitCreateCtrl', billingmaintenancedebitCreateCtrl);
	
	billingmaintenancedebitCreateCtrl.$inject=['$scope', 'billingmaintenancedebit', 'vesseltable'];

	function billingmaintenancedebitCreateCtrl($scope, billingmaintenancedebit, vesseltable) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of billingmaintenancedebit
			$scope.formData = new billingmaintenancedebit();
			// get vesseltable collection from the factory
			vesseltable.view().$promise.then(
				function(response) {
					$scope.vessels = response;
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