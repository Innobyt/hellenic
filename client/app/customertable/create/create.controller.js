(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('customertableCreateCtrl', customertableCreateCtrl);
	
	customertableCreateCtrl.$inject=['$scope', 'customertable'];

	function customertableCreateCtrl($scope, customertable) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of customertable
			$scope.formData = new customertable();
		};

		// submit customer table form
		$scope.submit = function() {
			// perform CRUD operations save
			$scope.formData.$save(function(){ $scope.initialize(); });
		};

		$scope.initialize();
	}
})();