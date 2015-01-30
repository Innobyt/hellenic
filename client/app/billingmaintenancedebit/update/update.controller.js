(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('billingmaintenancedebitUpdateCtrl', billingmaintenancedebitUpdateCtrl);
	
	billingmaintenancedebitUpdateCtrl.$inject=['$scope', '$stateParams', 'billingmaintenancedebit'];

	function billingmaintenancedebitUpdateCtrl($scope, $stateParams, billingmaintenancedebit) {

		// get a billingmaintenancedebit object from the factory
		$scope.billingmaintenancedebit = billingmaintenancedebit.query({ id: $stateParams.id });

		// initialize update controller
		$scope.initialize = function(){
			// create new instance of billingmaintenancedebit
			$scope.formData = new billingmaintenancedebit();
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