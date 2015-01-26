(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('vesseltableCreateCtrl', vesseltableCreateCtrl);
	
	vesseltableCreateCtrl.$inject=['$scope', 'vesseltable'];

	function vesseltableCreateCtrl($scope, vesseltable) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of vesseltable
			$scope.formData = new vesseltable();
		};

		// submit vessel table form
		$scope.submit = function() {
			// perform CRUD operations save
			$scope.formData.$save(function(){ $scope.initialize(); });
		};

		$scope.initialize();
	}
})();