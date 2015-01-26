(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('expensetableCreateCtrl', expensetableCreateCtrl);
	
	expensetableCreateCtrl.$inject=['$scope', 'expensetable'];

	function expensetableCreateCtrl($scope, expensetable) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of expensetable
			$scope.formData = new expensetable();
		};

		// submit customer table form
		$scope.submit = function() {
			// perform CRUD operations save
			$scope.formData.$save(function(){ $scope.initialize(); });
		};

		$scope.initialize();
	}
})();