(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('tablemaintenance_expenseCreateCtrl', tablemaintenance_expenseCreateCtrl);

	tablemaintenance_expenseCreateCtrl.$inject=['$scope', 'tablemaintenance_expense', 'expensetable'];

	function tablemaintenance_expenseCreateCtrl($scope, tablemaintenance_expense, expensetable) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of tablemaintenance_expense
			$scope.formData = new tablemaintenance_expense();
			// get expensetable collection from the factory
			expensetable.view().$promise.then(
				function(response) {
					$scope.expenses = response;
				});
		};

		// submit expense table form
		$scope.submit = function() {
			// perform CRUD operations save
			$scope.formData.$save(function(){ $scope.initialize(); });
		};

		$scope.initialize();
	}
})();