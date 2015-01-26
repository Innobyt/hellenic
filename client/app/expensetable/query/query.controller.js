(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('expensetableQueryCtrl', expensetableQueryCtrl);

	expensetableQueryCtrl.$inject=['$scope', '$filter', '$stateParams', 'ngTableParams', 'expensetable'];

	function expensetableQueryCtrl($scope, $filter, $stateParams, ngTableParams, expensetable) {
		/*jshint validthis: true */

		// get a expensetable object from the factory
		$scope.expense = expensetable.query({ id: $stateParams.id }, function(){
			// get expense accode
			$scope.accode = $scope.expense.accode;
		});
	}
})();