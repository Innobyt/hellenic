(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('tablemaintenance_expenseCreateCtrl', tablemaintenance_expenseCreateCtrl);
	
	tablemaintenance_expenseCreateCtrl.$inject=['$scope', 'tablemaintenance_expense'];

	function tablemaintenance_expenseCreateCtrl($scope, tablemaintenance_expense) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of tablemaintenance_expense
			$scope.formData = new tablemaintenance_expense();
		};

		// submit expense table form
		$scope.submit = function() {
			// perform CRUD operations save
			$scope.formData.$save(function(){ $scope.initialize(); });
		};

		$scope.initialize();
	}
})();