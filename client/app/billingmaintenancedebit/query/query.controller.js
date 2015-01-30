(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('billingmaintenancedebitQueryCtrl', billingmaintenancedebitQueryCtrl);

	billingmaintenancedebitQueryCtrl.$inject=['$scope', '$filter', '$stateParams', 'ngTableParams', 'billingmaintenancedebit'];

	function billingmaintenancedebitQueryCtrl($scope, $filter, $stateParams, ngTableParams, billingmaintenancedebit) {
		/*jshint validthis: true */

		// get a billingmaintenancedebit object from the factory
		$scope.billingmaintenancedebit = billingmaintenancedebit.query({ id: $stateParams.id });
	}
})();