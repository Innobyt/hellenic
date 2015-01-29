(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('generatecreditnoteCreateCtrl', generatecreditnoteCreateCtrl);
	
	generatecreditnoteCreateCtrl.$inject=['$scope', 'generatecreditnote', 'vesseltable', 'customertable'];

	function generatecreditnoteCreateCtrl($scope, generatecreditnote, vesseltable, customertable) {

		// initialize create controller
		$scope.initialize = function(){
			// create new instance of generatecreditnote
			$scope.formData = new generatecreditnote();
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

		// submit generate credit credit note form
		$scope.submit = function() {
			// perform CRUD operations save
			$scope.formData.$save(function(){ $scope.initialize(); });
		};

		$scope.initialize();
	}
})();