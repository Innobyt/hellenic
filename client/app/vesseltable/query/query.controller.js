(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('QueryCtrl', QueryCtrl);

	QueryCtrl.$inject=['$scope', '$filter', '$stateParams', 'ngTableParams', 'vesseltable'];

	function QueryCtrl($scope, $filter, $stateParams, ngTableParams, vesseltable) {
		/*jshint validthis: true */

		// get a vesseltable object from the factory
		$scope.vessel = vesseltable.query({ id: $stateParams.id }, function(){
			// get vessel number
			$scope.number = $scope.vessel.number;
		});
	}
})();