(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('systemutilitiesQueryCtrl', systemutilitiesQueryCtrl);

	systemutilitiesQueryCtrl.$inject=['$scope', '$filter', '$stateParams', 'ngTableParams', 'systemutilities'];

	function systemutilitiesQueryCtrl($scope, $filter, $stateParams, ngTableParams, systemutilities) {
		/*jshint validthis: true */

		// get a systemutilities object from the factory
		$scope.systemutilities = systemutilities.query({ id: $stateParams.id });
	}
})();