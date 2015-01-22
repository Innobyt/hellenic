'use strict';

angular.module('hellenicApp')
  .config(function ($stateProvider) {
    $stateProvider
	.state('create_customertable', {
        url: '/customertable/create',
        templateUrl: 'app/customertable/create/create.html',
        controller: 'customertableCreateCtrl',
        authenticate: true
      })
    .state('list_customertable', {
        url: '/customertable/list',
        templateUrl: 'app/customertable/list/list.html',
        controller: 'customertableListCtrl',
        authenticate: true
      })
    .state('query_customertable', {
        url: '/customertable/query/:id',
        templateUrl: 'app/customertable/query/query.html',
        controller: 'customertableQueryCtrl',
        authenticate: true
      })
      .state('update_customertable', {
        url: '/customertable/update/:id',
        templateUrl: 'app/customertable/update/update.html',
        controller: 'customertableUpdateCtrl',
        authenticate: true
      });
  });

