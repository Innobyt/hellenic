(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('vendortableCreateCtrl', vendortableCreateCtrl);
	
	vendortableCreateCtrl.$inject=['$scope', 'vendortable'];

	function vendortableCreateCtrl($scope, vendortable) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of vendortable
			$scope.formData = new vendortable();
		};

		// submit vendor table form
		$scope.submit = function() {
			// perform CRUD operations save
			$scope.formData.$save(function(){ $scope.initialize(); });
		};

		$scope.initialize();
	}
})();