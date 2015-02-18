(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('billingmaintenancecreditUpdateCtrl', billingmaintenancecreditUpdateCtrl);
	
	billingmaintenancecreditUpdateCtrl.$inject=['$scope', '$stateParams', 'billingmaintenancecredit', 'vesseltable' , 'customertable'];

	function billingmaintenancecreditUpdateCtrl($scope, $stateParams, billingmaintenancecredit, vesseltable, customertable) {

		// get a billingmaintenancecredit object from the factory
		$scope.billingmaintenancecredit = billingmaintenancecredit.query({ id: $stateParams.id });

		// initialize update controller
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

		$scope.submit = function() {
			// perform CRUD operations update
			$scope.formData.$update({ id: $stateParams.id }, function(){ 
				$scope.initialize(); 
			});
		};

		$scope.initialize();
	}
})();