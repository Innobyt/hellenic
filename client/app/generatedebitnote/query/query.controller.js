(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('generatedebitnoteQueryCtrl', generatedebitnoteQueryCtrl);

	generatedebitnoteQueryCtrl.$inject=['$scope', '$filter', '$stateParams', 'ngTableParams', 'generatedebitnote'];

	function generatedebitnoteQueryCtrl($scope, $filter, $stateParams, ngTableParams, generatedebitnote) {
		/*jshint validthis: true */

		// get a generatedebitnote object from the factory
		$scope.generatedebitnote = generatedebitnote.query({ id: $stateParams.id });
	}
})();