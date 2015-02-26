(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('expensetableUpdateCtrl', expensetableUpdateCtrl);
	
	expensetableUpdateCtrl.$inject=['$scope', '$stateParams', 'expensetable'];

	function expensetableUpdateCtrl($scope, $stateParams, expensetable) {

		$scope.initialize = function(){
			// query expensetable
			expensetable.query({
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
				$state.go('list_expensetable');
			});
		};
		$scope.initialize();
	}
})();

