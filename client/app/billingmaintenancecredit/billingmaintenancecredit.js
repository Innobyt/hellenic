'use strict';

angular.module('hellenicApp')
  .config(function ($stateProvider) {
    $stateProvider
	.state('create_billingmaintenancecredit', {
        url: '/billingmaintenancecredit/create',
        templateUrl: 'app/billingmaintenancecredit/create/create.html',
        controller: 'billingmaintenancecreditCreateCtrl',
        authenticate: true
      })
    .state('list_billingmaintenancecredit', {
        url: '/billingmaintenancecredit/list',
        templateUrl: 'app/billingmaintenancecredit/list/list.html',
        controller: 'billingmaintenancecreditListCtrl',
        authenticate: true
      })
    .state('query_billingmaintenancecredit', {
        url: '/billingmaintenancecredit/query/:id',
        templateUrl: 'app/billingmaintenancecredit/query/query.html',
        controller: 'billingmaintenancecreditQueryCtrl',
        authenticate: true
      })
      .state('update_billingmaintenancecredit', {
        url: '/billingmaintenancecredit/update/:id',
        templateUrl: 'app/billingmaintenancecredit/update/update.html',
        controller: 'billingmaintenancecreditUpdateCtrl',
        authenticate: true
      });
  });