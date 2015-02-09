(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('systemutilitiesCreateCtrl', systemutilitiesCreateCtrl);
	
	systemutilitiesCreateCtrl.$inject=['$scope', 'systemutilities'];

	function systemutilitiesCreateCtrl($scope, systemutilities) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of systemutilities
			$scope.formData = new systemutilities();
		};

		// submit customer table form
		$scope.submit = function() {
			// perform CRUD operations save
			$scope.formData.$save(function(){ $scope.initialize(); });
		};

		$scope.initialize();
	}
})();