(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('billingmaintenancecreditQueryCtrl', billingmaintenancecreditQueryCtrl);

	billingmaintenancecreditQueryCtrl.$inject=['$scope', '$filter', '$stateParams', 'ngTableParams', 'billingmaintenancecredit'];

	function billingmaintenancecreditQueryCtrl($scope, $filter, $stateParams, ngTableParams, billingmaintenancecredit) {
		/*jshint validthis: true */

		// get a billingmaintenancecredit object from the factory
		$scope.billingmaintenancecredit = billingmaintenancecredit.query({ id: $stateParams.id });
	}
})();