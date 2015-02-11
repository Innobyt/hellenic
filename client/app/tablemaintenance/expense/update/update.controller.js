(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('tablemaintenance_expenseUpdateCtrl', tablemaintenance_expenseUpdateCtrl);
	
	tablemaintenance_expenseUpdateCtrl.$inject=['$scope', '$stateParams', 'tablemaintenance_expense'];

	function tablemaintenance_expenseUpdateCtrl($scope, $stateParams, tablemaintenance_expense) {

		// get a tablemaintenance_expense object from the factory
		$scope.tablemaintenance_expense = tablemaintenance_expense.query({ id: $stateParams.id });

		// initialize update controller
		$scope.initialize = function(){
			// create new instance of tablemaintenance_expense
			$scope.formData = new tablemaintenance_expense();
		};

		$scope.submit = function() {
			// perform CRUD operations update
			$scope.formData.$update({ id: $stateParams.id }, function(){ 
				$scope.initialize(); 
			});
		};

		$scope.initialize();
	}
})();

