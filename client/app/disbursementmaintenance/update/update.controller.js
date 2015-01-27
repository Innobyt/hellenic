(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('disbursementmaintenanceUpdateCtrl', disbursementmaintenanceUpdateCtrl);
	
	disbursementmaintenanceUpdateCtrl.$inject=['$scope', '$stateParams', 'disbursementmaintenance'];

	function disbursementmaintenanceUpdateCtrl($scope, $stateParams, disbursementmaintenance) {

		// get a disbursementmaintenance object from the factory
		$scope.disbursementmaintenance = disbursementmaintenance.query({ id: $stateParams.id });


		// initialize update controller
		$scope.initialize = function(){
			// create new instance of disbursementmaintenance
			$scope.formData = new disbursementmaintenance();
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

