'use strict';

angular.module('hellenicApp')
  .config(function ($stateProvider) {
    $stateProvider
	.state('create_generatedebitnote', {
        url: '/generatedebitnote/create',
        templateUrl: 'app/generatedebitnote/create/create.html',
        controller: 'generatedebitnoteCreateCtrl',
        authenticate: true
      })
    .state('list_generatedebitnote', {
        url: '/generatedebitnote/list',
        templateUrl: 'app/generatedebitnote/list/list.html',
        controller: 'generatedebitnoteListCtrl',
        authenticate: true
      })
    .state('query_generatedebitnote', {
        url: '/generatedebitnote/query/:id',
        templateUrl: 'app/generatedebitnote/query/query.html',
        controller: 'generatedebitnoteQueryCtrl',
        authenticate: true
      })
      .state('update_generatedebitnote', {
        url: '/generatedebitnote/update/:id',
        templateUrl: 'app/generatedebitnote/update/update.html',
        controller: 'generatedebitnoteUpdateCtrl',
        authenticate: true
      });
  });

