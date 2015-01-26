'use strict';

angular.module('hellenicApp')
  .config(function ($stateProvider) {
    $stateProvider
	.state('create_disbursementmaintenance', {
        url: '/disbursement_maintenance/create',
        templateUrl: 'app/disbursementmaintenance/create/create.html',
        controller: 'disbursementmaintenanceCreateCtrl',
        authenticate: true
      })
    .state('list_disbursementmaintenance', {
        url: '/disbursement_maintenance/list',
        templateUrl: 'app/disbursementmaintenance/list/list.html',
        controller: 'disbursementmaintenanceListCtrl',
        authenticate: true
      })
    .state('query_disbursementmaintenance', {
        url: '/disbursement_maintenance/query/:id',
        templateUrl: 'app/disbursementmaintenance/query/query.html',
        controller: 'disbursementmaintenanceQueryCtrl',
        authenticate: true
      })
      .state('update_disbursementmaintenance', {
        url: '/disbursement_maintenance/update/:id',
        templateUrl: 'app/disbursementmaintenance/update/update.html',
        controller: 'disbursementmaintenanceUpdateCtrl',
        authenticate: true
      });
  });

