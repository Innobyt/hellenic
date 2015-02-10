(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('tablemaintenance_customerUpdateCtrl', tablemaintenance_customerUpdateCtrl);
	
	tablemaintenance_customerUpdateCtrl.$inject=['$scope', '$stateParams', 'tablemaintenance_customer'];

	function tablemaintenance_customerUpdateCtrl($scope, $stateParams, tablemaintenance_customer) {

		// get a tablemaintenance_customer object from the factory
		$scope.tablemaintenance_customer = tablemaintenance_customer.query({ id: $stateParams.id });

		// initialize update controller
		$scope.initialize = function(){
			// create new instance of tablemaintenance_customer
			$scope.formData = new tablemaintenance_customer();
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

