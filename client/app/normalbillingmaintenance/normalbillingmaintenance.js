'use strict';

angular.module('hellenicApp')
  .config(function ($stateProvider) {
    $stateProvider
	.state('create_normalbillingmaintenance', {
        url: '/normalbillingmaintenance/create',
        templateUrl: 'app/normalbillingmaintenance/create/create.html',
        controller: 'normalbillingmaintenanceCreateCtrl',
        authenticate: true
      })
    .state('list_normalbillingmaintenance', {
        url: '/normalbillingmaintenance/list',
        templateUrl: 'app/normalbillingmaintenance/list/list.html',
        controller: 'normalbillingmaintenanceListCtrl',
        authenticate: true
      })
    .state('query_normalbillingmaintenance', {
        url: '/normalbillingmaintenance/query/:id',
        templateUrl: 'app/normalbillingmaintenance/query/query.html',
        controller: 'normalbillingmaintenanceQueryCtrl',
        authenticate: true
      })
      .state('update_normalbillingmaintenance', {
        url: '/normalbillingmaintenance/update/:id',
        templateUrl: 'app/normalbillingmaintenance/update/update.html',
        controller: 'normalbillingmaintenanceUpdateCtrl',
        authenticate: true
      });
  });