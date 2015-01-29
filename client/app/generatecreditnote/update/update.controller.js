(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('generatecreditnoteUpdateCtrl', generatecreditnoteUpdateCtrl);
	
	generatecreditnoteUpdateCtrl.$inject=['$scope', '$stateParams', 'generatecreditnote', 'vesseltable', 'customertable'];

	function generatecreditnoteUpdateCtrl($scope, $stateParams, generatecreditnote, vesseltable, customertable) {

		// get a generatecreditnote object from the factory
		$scope.generatecreditnote = generatecreditnote.query({ id: $stateParams.id });

		// initialize update controller
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

		$scope.submit = function() {
			// perform CRUD operations update
			$scope.formData.$update({ id: $stateParams.id }, function(){ 
				$scope.initialize(); 
			});
		};

		$scope.initialize();
	}
})();

