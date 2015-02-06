(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('generatedisbursementaccountCreateCtrl', generatedisbursementaccountCreateCtrl);
	
	generatedisbursementaccountCreateCtrl.$inject=['$scope', 'generatedisbursementaccount'];

	function generatedisbursementaccountCreateCtrl($scope, generatedisbursementaccount) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of generatedisbursementaccount
			$scope.formData = new generatedisbursementaccount();
		};

		// submit customer table form
		$scope.submit = function() {
			// perform CRUD operations save
			$scope.formData.$save(function(){ $scope.initialize(); });
		};

		$scope.initialize();
	}
})();