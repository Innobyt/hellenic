(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('billingmaintenancecreditCreateCtrl', billingmaintenancecreditCreateCtrl);
	
	billingmaintenancecreditCreateCtrl.$inject=['$scope', 'billingmaintenancecredit'];

	function billingmaintenancecreditCreateCtrl($scope, billingmaintenancecredit) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of billingmaintenancecredit
			$scope.formData = new billingmaintenancecredit();
		};

		// submit customer table form
		$scope.submit = function() {
			// perform CRUD operations save
			$scope.formData.$save(function(){ $scope.initialize(); });
		};

		$scope.initialize();
	}
})();