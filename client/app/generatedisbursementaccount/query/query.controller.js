(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('generatedisbursementaccountQueryCtrl', generatedisbursementaccountQueryCtrl);

	generatedisbursementaccountQueryCtrl.$inject=['$scope', '$filter', '$stateParams', 'ngTableParams', 'generatedisbursementaccount'];

	function generatedisbursementaccountQueryCtrl($scope, $filter, $stateParams, ngTableParams, generatedisbursementaccount) {
		/*jshint validthis: true */

		// get a generatedisbursementaccount object from the factory
		$scope.generatedisbursementaccount = generatedisbursementaccount.query({ id: $stateParams.id });

		console.log($scope.generatedisbursementaccount);

	}
})();