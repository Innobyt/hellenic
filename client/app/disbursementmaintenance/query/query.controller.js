(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('disbursementmaintenanceQueryCtrl', disbursementmaintenanceQueryCtrl);

	disbursementmaintenanceQueryCtrl.$inject=['$scope', '$filter', '$stateParams', '$state', 'Auth', 'ngTableParams', 'disbursementmaintenance'];

	function disbursementmaintenanceQueryCtrl($scope, $filter, $stateParams, $state, Auth, ngTableParams, disbursementmaintenance) {
		/*jshint validthis: true */

		// get a disbursementmaintenance object from the factory
		$scope.disbursementmaintenance = disbursementmaintenance.query({ id: $stateParams.id });

		$scope.isAdmin = Auth.isAdmin;

		$scope.deleteEntry = function() {
			disbursementmaintenance.delete({ id: $stateParams.id });
			$state.go('list_disbursementmaintenance');
		};

	}
})();