(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('tablemaintenance_expenseQueryCtrl', tablemaintenance_expenseQueryCtrl);

	tablemaintenance_expenseQueryCtrl.$inject=['$scope', '$filter', '$stateParams', 'ngTableParams', 'tablemaintenance_expense'];

	function tablemaintenance_expenseQueryCtrl($scope, $filter, $stateParams, ngTableParams, tablemaintenance_expense) {
		/*jshint validthis: true */

		// get a tablemaintenance_expense object from the factory
		$scope.tablemaintenance_expense = tablemaintenance_expense.query({ id: $stateParams.id });
	}
})();