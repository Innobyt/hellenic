(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('tablemaintenance_customerCreateCtrl', tablemaintenance_customerCreateCtrl);
	
	tablemaintenance_customerCreateCtrl.$inject=['$scope', 'tablemaintenance_customer'];

	function tablemaintenance_customerCreateCtrl($scope, tablemaintenance_customer) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of tablemaintenance_customer
			$scope.formData = new tablemaintenance_customer();
		};

		// submit customer table form
		$scope.submit = function() {
			// perform CRUD operations save
			$scope.formData.$save(function(){ $scope.initialize(); });
		};

		$scope.initialize();
	}
})();