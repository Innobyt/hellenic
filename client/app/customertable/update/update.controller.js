(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('customertableUpdateCtrl', customertableUpdateCtrl);
	
	customertableUpdateCtrl.$inject=['$scope', '$stateParams', '$state', 'customertable'];

	function customertableUpdateCtrl($scope, $stateParams, $state, customertable) {

		// initialize update controller
		$scope.initialize = function(){
			// query customertable
			customertable.query({
				id: $stateParams.id
			}).$promise.then(
				function(response) {
					$scope.formData = response;
				});
		};

		$scope.submit = function() {
			// perform CRUD operations update
			$scope.formData.$update({
				id: $stateParams.id
			}, function() {
				$state.go('list_customertable');
			});
		};
		$scope.initialize();
	}
})();



