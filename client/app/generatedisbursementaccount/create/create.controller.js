(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('generatedisbursementaccountCreateCtrl', generatedisbursementaccountCreateCtrl);
	
	generatedisbursementaccountCreateCtrl.$inject=['$scope', 'generatedisbursementaccount', 'vesseltable', 'customertable'];

	function generatedisbursementaccountCreateCtrl($scope, generatedisbursementaccount, vesseltable, customertable) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of generatedisbursementaccount
			$scope.formData = new generatedisbursementaccount();
			// get vesseltable collection from the factory
			vesseltable.view().$promise.then(
				function(response) {
					$scope.vessels = response;
				});
			// get customertable collection from the factory
			customertable.view().$promise.then(
				function(response) {
					$scope.customers = response;
				});
		};

		// submit customer table form
		$scope.submit = function() {
			// perform CRUD operations save
			$scope.formData.$save(function(){ $scope.initialize(); });
		};

		$scope.initialize();
	}
})();