'use strict';

angular.module('hellenicApp')
  .config(function ($stateProvider) {
    $stateProvider
	.state('create_billingmaintenancedebit', {
        url: '/billingmaintenancedebit/create',
        templateUrl: 'app/billingmaintenancedebit/create/create.html',
        controller: 'billingmaintenancedebitCreateCtrl',
        authenticate: true
      })
    .state('list_billingmaintenancedebit', {
        url: '/billingmaintenancedebit/list',
        templateUrl: 'app/billingmaintenancedebit/list/list.html',
        controller: 'billingmaintenancedebitListCtrl',
        authenticate: true
      })
    .state('query_billingmaintenancedebit', {
        url: '/billingmaintenancedebit/query/:id',
        templateUrl: 'app/billingmaintenancedebit/query/query.html',
        controller: 'billingmaintenancedebitQueryCtrl',
        authenticate: true
      })
      .state('update_billingmaintenancedebit', {
        url: '/billingmaintenancedebit/update/:id',
        templateUrl: 'app/billingmaintenancedebit/update/update.html',
        controller: 'billingmaintenancedebitUpdateCtrl',
        authenticate: true
      });
  });