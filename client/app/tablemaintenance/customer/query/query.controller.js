(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('tablemaintenance_customerQueryCtrl', tablemaintenance_customerQueryCtrl);

	tablemaintenance_customerQueryCtrl.$inject=['$scope', '$filter', '$stateParams', 'ngTableParams', 'tablemaintenance_customer'];

	function tablemaintenance_customerQueryCtrl($scope, $filter, $stateParams, ngTableParams, tablemaintenance_customer) {
		/*jshint validthis: true */

		// get a tablemaintenance_customer object from the factory
		$scope.tablemaintenance_customer = tablemaintenance_customer.query({ id: $stateParams.id });
	}
})();