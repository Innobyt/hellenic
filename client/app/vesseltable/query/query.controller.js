(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('QueryCtrl', QueryCtrl);

	QueryCtrl.$inject=['$scope', '$filter', '$stateParams', 'ngTableParams', 'vesseltable'];

	function QueryCtrl($scope, $filter, $stateParams, ngTableParams, vesseltable) {
		/*jshint validthis: true */

		$scope.vessel = vesseltable.query({ id: $stateParams.id }, function(){
			$scope.number = $scope.vessel.number;
			$scope.formData = $scope.vessel;
		});
	}
})();