
(function() {
	'use strict';
	
	angular.module('hellenicApp')
	  .controller('disbursementmaintenanceListCtrl', disbursementmaintenanceListCtrl);

	disbursementmaintenanceListCtrl.$inject=['$scope', '$filter', 'ngTableParams', 'disbursementmaintenance'];
	
	function disbursementmaintenanceListCtrl($scope, $filter, ngTableParams, disbursementmaintenance) {
		
		// get a disbursementmaintenance collection from the factory
		var data = $scope.list = disbursementmaintenance.view();

		/*** Export options in http://ui-grid.info/docs/#/tutorial/206_exporting_data */
		/*** gridOptions in https://github.com/angular-ui/ui-grid/wiki/Configuration-Options */
		$scope.gridOptions = {
    		enableGridMenu: true,
		    exporterPdfDefaultStyle: {fontSize: 9},
    		exporterPdfTableHeaderStyle: {fontSize: 10, bold: false},
		    exporterPdfOrientation: 'landscape',
			data: data
		};

		data.$promise.then(function(rs){
			$scope.gridOptions.columnDefs = generateHeaders(rs);
		});

		function generateHeaders(data){
			var rs = [],
				sample = data[0];

			for (data in sample){
				if (typeof sample[data] === 'function' || data[0] === '_'){
					continue;
				}
				/*** Config options in https://github.com/angular-ui/ui-grid/wiki/Defining-columns */
				rs.push({
					name: data, 
					width:'150',
				});
			}
			return rs;
		}

		/*** ng-table codes */
		// $scope.tableParams = new ngTableParams({
		// 	// show first page
		// 	page: 1,            
		// 	// count per page
		// 	count: 10,          
		// 	// initial filter
		// 	filter: { number: '' },
		// 	// initial sorting
		// 	sorting: { number: 'asc' }
		// }, {
		// 	// length of data
		// 	total: data.length,
		// 	getData: function($defer, params) {
		// 	// use build-in angular filter
		// 		var filteredData = params.filter() ?
		// 			$filter('filter')(data, params.filter()) :
		// 			data;
		// 		var orderedData = params.sorting() ?
		// 			$filter('orderBy')(filteredData, params.orderBy()) :
		// 			data;

		// 		params.total(orderedData.length); // set total for recalc pagination
		// 		$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
		// 	}
		// });

	}
})();