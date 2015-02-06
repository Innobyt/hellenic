(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('generatedisbursementaccountUpdateCtrl', generatedisbursementaccountUpdateCtrl);
	
	generatedisbursementaccountUpdateCtrl.$inject=['$scope', '$stateParams', 'generatedisbursementaccount'];

	function generatedisbursementaccountUpdateCtrl($scope, $stateParams, generatedisbursementaccount) {

		// get a generatedisbursementaccount object from the factory
		$scope.generatedisbursementaccount = generatedisbursementaccount.query({ id: $stateParams.id });

		// initialize update controller
		$scope.initialize = function(){
			// create new instance of generatedisbursementaccount
			$scope.formData = new generatedisbursementaccount();
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