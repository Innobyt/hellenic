(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('billingmaintenancecreditUpdateCtrl', billingmaintenancecreditUpdateCtrl);
	
	billingmaintenancecreditUpdateCtrl.$inject=['$scope', '$stateParams', 'billingmaintenancecredit'];

	function billingmaintenancecreditUpdateCtrl($scope, $stateParams, billingmaintenancecredit) {

		// get a billingmaintenancecredit object from the factory
		$scope.billingmaintenancecredit = billingmaintenancecredit.query({ id: $stateParams.id });

		// initialize update controller
		$scope.initialize = function(){
			// create new instance of billingmaintenancecredit
			$scope.formData = new billingmaintenancecredit();
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