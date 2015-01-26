(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('expensetableUpdateCtrl', expensetableUpdateCtrl);
	
	expensetableUpdateCtrl.$inject=['$scope', '$stateParams', 'expensetable'];

	function expensetableUpdateCtrl($scope, $stateParams, expensetable) {

		// get a expensetable object from the factory
		$scope.expense = expensetable.query({ id: $stateParams.id }, function(){
			$scope.accode = $scope.expense.accode;
		});

		// initialize update controller
		$scope.initialize = function(){
			// create new instance of expensetable
			$scope.formData = new expensetable();
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