(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('generatedebitnoteCreateCtrl', generatedebitnoteCreateCtrl);
	
	generatedebitnoteCreateCtrl.$inject=['$scope', 'generatedebitnote', 'vesseltable', 'customertable'];

	function generatedebitnoteCreateCtrl($scope, generatedebitnote, vesseltable, customertable) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of generatedebitnote
			$scope.formData = new generatedebitnote();
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

		// submit generate credit debit note form
		$scope.submit = function() {
			// perform CRUD operations save
			$scope.formData.$save(function(){ $scope.initialize(); });
		};

		$scope.initialize();
	}
})();