(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('generatecreditnoteQueryCtrl', generatecreditnoteQueryCtrl);

	generatecreditnoteQueryCtrl.$inject=['$scope', '$filter', '$stateParams', 'ngTableParams', 'generatecreditnote'];

	function generatecreditnoteQueryCtrl($scope, $filter, $stateParams, ngTableParams, generatecreditnote) {
		/*jshint validthis: true */

		// get a generatecreditnote object from the factory
		$scope.generatecreditnote = generatecreditnote.query({ id: $stateParams.id });
	}
})();