(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('tablemaintenance_customerCreateCtrl', tablemaintenance_customerCreateCtrl);
	
	tablemaintenance_customerCreateCtrl.$inject=['$scope', 'tablemaintenance_customer', 'vesseltable', 'customertable'];

	function tablemaintenance_customerCreateCtrl($scope, tablemaintenance_customer, vesseltable, customertable) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of tablemaintenance_customer
			$scope.formData = new tablemaintenance_customer();
			// get vesseltable collection from the factory
			vesseltable.view().$promise.then(
				function(response) {
					$scope.vessels = response;
				});
			// get customertable collection from the factory
			customertable.view().$promise.then(
				function(response) {
					$scope.customers = response;
				});
		};

		// submit customer table form
		$scope.submit = function() {
			// perform CRUD operations save
			$scope.formData.$save(function(){ $scope.initialize(); });
		};

		$scope.initialize();
	}
})();