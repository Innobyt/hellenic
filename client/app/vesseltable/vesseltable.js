'use strict';

angular.module('hellenicApp')
  .config(function ($stateProvider) {
    $stateProvider
	.state('create', {
        url: '/vesseltable/create',
        templateUrl: 'app/vesseltable/create/create.html',
        controller: 'CreateCtrl',
        authenticate: true
      })
    .state('list', {
        url: '/vesseltable/list',
        templateUrl: 'app/vesseltable/list/list.html',
        controller: 'ListCtrl',
        authenticate: true
      })
    .state('query', {
        url: '/vesseltable/query/:id',
        templateUrl: 'app/vesseltable/query/query.html',
        controller: 'QueryCtrl',
        authenticate: true
      })
      .state('update', {
        url: '/vesseltable/update/:id',
        templateUrl: 'app/vesseltable/update/update.html',
        controller: 'UpdateCtrl',
        authenticate: true
      });
  });

