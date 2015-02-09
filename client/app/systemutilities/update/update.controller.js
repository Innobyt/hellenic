(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('systemutilitiesUpdateCtrl', systemutilitiesUpdateCtrl);
	
	systemutilitiesUpdateCtrl.$inject=['$scope', '$stateParams', 'systemutilities'];

	function systemutilitiesUpdateCtrl($scope, $stateParams, systemutilities) {

		// get a systemutilities object from the factory
		$scope.expense = systemutilities.query({ id: $stateParams.id });

		// initialize update controller
		$scope.initialize = function(){
			// create new instance of systemutilities
			$scope.formData = new systemutilities();
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