(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('generatedebitnoteUpdateCtrl', generatedebitnoteUpdateCtrl);
	
	generatedebitnoteUpdateCtrl.$inject=['$scope', '$stateParams', 'generatedebitnote', 'vesseltable', 'customertable'];

	function generatedebitnoteUpdateCtrl($scope, $stateParams, generatedebitnote, vesseltable, customertable) {

		// get a generatedebitnote object from the factory
		$scope.generatedebitnote = generatedebitnote.query({ id: $stateParams.id });

		// initialize update controller
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

		$scope.submit = function() {
			// perform CRUD operations update
			$scope.formData.$update({ id: $stateParams.id }, function(){ 
				$scope.initialize(); 
			});
		};

		$scope.initialize();
	}
})();

