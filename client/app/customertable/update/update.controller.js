(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('customertableUpdateCtrl', customertableUpdateCtrl);
	
	customertableUpdateCtrl.$inject=['$scope', '$stateParams', 'customertable'];

	function customertableUpdateCtrl($scope, $stateParams, customertable) {

		// get a customertable object from the factory
		$scope.vessel = customertable.query({ id: $stateParams.id }, function(){
			$scope.number = $scope.vessel.number;
		});

		// initialize update controller
		$scope.initialize = function(){
			// create new instance of customertable
			$scope.formData = new customertable();
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

