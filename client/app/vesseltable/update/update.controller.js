(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('vesseltableUpdateCtrl', vesseltableUpdateCtrl);
	
	vesseltableUpdateCtrl.$inject=['$scope', '$stateParams', 'vesseltable'];

	function vesseltableUpdateCtrl($scope, $stateParams, vesseltable) {

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

