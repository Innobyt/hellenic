'use strict';

angular.module('hellenicApp')
  .config(function ($stateProvider) {
    $stateProvider
	.state('create_expensetable', {
        url: '/expensetable/create',
        templateUrl: 'app/expensetable/create/create.html',
        controller: 'expensetableCreateCtrl',
        authenticate: true
      })
    .state('list_expensetable', {
        url: '/expensetable/list',
        templateUrl: 'app/expensetable/list/list.html',
        controller: 'expensetableListCtrl',
        authenticate: true
      })
    .state('query_expensetable', {
        url: '/expensetable/query/:id',
        templateUrl: 'app/expensetable/query/query.html',
        controller: 'expensetableQueryCtrl',
        authenticate: true
      })
      .state('update_expensetable', {
        url: '/expensetable/update/:id',
        templateUrl: 'app/expensetable/update/update.html',
        controller: 'expensetableUpdateCtrl',
        authenticate: true
      });
  });