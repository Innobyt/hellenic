(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('vendortableQueryCtrl', vendortableQueryCtrl);

	vendortableQueryCtrl.$inject=['$scope', '$filter', '$stateParams', 'ngTableParams', 'vendortable'];

	function vendortableQueryCtrl($scope, $filter, $stateParams, ngTableParams, vendortable) {
		/*jshint validthis: true */

		// get a vendortable object from the factory
		$scope.vendor = vendortable.query({ id: $stateParams.id }, function(){
			// get vendor number
			$scope.number = $scope.vendor.number;
		});
	}
})();