(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('billingmaintenancecreditCreateCtrl', billingmaintenancecreditCreateCtrl);
	
	billingmaintenancecreditCreateCtrl.$inject=['$scope', 'billingmaintenancecredit', 'vesseltable' , 'customertable'];

	function billingmaintenancecreditCreateCtrl($scope, billingmaintenancecredit, vesseltable, customertable) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of billingmaintenancecredit
			$scope.formData = new billingmaintenancecredit();
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