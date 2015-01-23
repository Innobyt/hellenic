(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('customertableQueryCtrl', customertableQueryCtrl);

	customertableQueryCtrl.$inject=['$scope', '$filter', '$stateParams', 'ngTableParams', 'customertable'];

	function customertableQueryCtrl($scope, $filter, $stateParams, ngTableParams, customertable) {
		/*jshint validthis: true */

		// get a customertable object from the factory
		$scope.customer = customertable.query({ id: $stateParams.id }, function(){
			// get customer number
			$scope.number = $scope.customer.number;
		});
	}
})();