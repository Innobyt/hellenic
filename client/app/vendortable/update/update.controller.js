(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('vendortableUpdateCtrl', vendortableUpdateCtrl);
	
	vendortableUpdateCtrl.$inject=['$scope', '$stateParams', 'vendortable'];

	function vendortableUpdateCtrl($scope, $stateParams, vendortable) {

		$scope.initialize = function(){
			// query vendortable
			vendortable.query({
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
				$state.go('list_vendortable');
			});
		};
		$scope.initialize();
	}
})();

