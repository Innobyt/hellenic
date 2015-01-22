(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('UpdateCtrl', UpdateCtrl);
	
	UpdateCtrl.$inject=['$scope', '$stateParams', 'vesseltable'];

	function UpdateCtrl($scope, $stateParams, vesseltable) {

		// get a vesseltable object from the factory
		$scope.vessel = vesseltable.query({ id: $stateParams.id }, function(){
			$scope.number = $scope.vessel.number;
		});

		// initialize update controller
		$scope.initialize = function(){
			// create new instance of vesseltable
			$scope.formData = new vesseltable();
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

