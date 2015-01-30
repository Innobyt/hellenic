(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('billingmaintenancedebitCreateCtrl', billingmaintenancedebitCreateCtrl);
	
	billingmaintenancedebitCreateCtrl.$inject=['$scope', 'billingmaintenancedebit'];

	function billingmaintenancedebitCreateCtrl($scope, billingmaintenancedebit) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of billingmaintenancedebit
			$scope.formData = new billingmaintenancedebit();
		};

		// submit customer table form
		$scope.submit = function() {
			// perform CRUD operations save
			$scope.formData.$save(function(){ $scope.initialize(); });
		};

		$scope.initialize();
	}
})();