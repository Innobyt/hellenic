(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('disbursementmaintenanceQueryCtrl', disbursementmaintenanceQueryCtrl);

	disbursementmaintenanceQueryCtrl.$inject=['$scope', '$filter', '$stateParams', 'ngTableParams', 'disbursementmaintenance'];

	function disbursementmaintenanceQueryCtrl($scope, $filter, $stateParams, ngTableParams, disbursementmaintenance) {
		/*jshint validthis: true */

		// get a disbursementmaintenance object from the factory
		$scope.disbursementmaintenance = disbursementmaintenance.query({ id: $stateParams.id });

	}
})();