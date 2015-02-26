'use strict';

angular.module('hellenicApp')
  .config(function ($stateProvider) {
    $stateProvider
	.state('create_vendortable', {
        url: '/vendortable/create',
        templateUrl: 'app/vendortable/create/create.html',
        controller: 'vendortableCreateCtrl',
        authenticate: true
      })
    .state('list_vendortable', {
        url: '/vendortable/list',
        templateUrl: 'app/vendortable/list/list.html',
        controller: 'vendortableListCtrl',
        authenticate: true
      })
    .state('query_vendortable', {
        url: '/vendortable/query/:id',
        templateUrl: 'app/vendortable/query/query.html',
        controller: 'vendortableQueryCtrl',
        authenticate: true
      })
      .state('update_vendortable', {
        url: '/vendortable/update/:id',
        templateUrl: 'app/vendortable/update/update.html',
        controller: 'vendortableUpdateCtrl',
        authenticate: true
      });
  });

