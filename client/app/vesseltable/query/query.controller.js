(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('vesseltableQueryCtrl', vesseltableQueryCtrl);

	vesseltableQueryCtrl.$inject=['$scope', '$filter', '$stateParams', 'ngTableParams', 'vesseltable'];

	function vesseltableQueryCtrl($scope, $filter, $stateParams, ngTableParams, vesseltable) {
		/*jshint validthis: true */

		// get a vesseltable object from the factory
		$scope.vessel = vesseltable.query({ id: $stateParams.id }, function(){
			// get vessel number
			$scope.number = $scope.vessel.number;
		});
	}
})();