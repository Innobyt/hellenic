(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('normalbillingmaintenanceQueryCtrl', normalbillingmaintenanceQueryCtrl);

	normalbillingmaintenanceQueryCtrl.$inject=['$scope', '$filter', '$stateParams', 'ngTableParams', 'normalbillingmaintenance'];

	function normalbillingmaintenanceQueryCtrl($scope, $filter, $stateParams, ngTableParams, normalbillingmaintenance) {
		/*jshint validthis: true */

		// get a normalbillingmaintenance object from the factory
		$scope.normalbillingmaintenance = normalbillingmaintenance.query({ id: $stateParams.id });
	}
})();