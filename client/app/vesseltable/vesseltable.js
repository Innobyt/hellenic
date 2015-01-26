'use strict';

angular.module('hellenicApp')
  .config(function ($stateProvider) {
    $stateProvider
	.state('create_vesseltable', {
        url: '/vesseltable/create',
        templateUrl: 'app/vesseltable/create/create.html',
        controller: 'vesseltableCreateCtrl',
        authenticate: true
      })
    .state('list_vesseltable', {
        url: '/vesseltable/list',
        templateUrl: 'app/vesseltable/list/list.html',
        controller: 'vesseltableListCtrl',
        authenticate: true
      })
    .state('query_vesseltable', {
        url: '/vesseltable/query/:id',
        templateUrl: 'app/vesseltable/query/query.html',
        controller: 'vesseltableQueryCtrl',
        authenticate: true
      })
      .state('update_vesseltable', {
        url: '/vesseltable/update/:id',
        templateUrl: 'app/vesseltable/update/update.html',
        controller: 'vesseltableUpdateCtrl',
        authenticate: true
      });
  });

