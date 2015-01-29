'use strict';

angular.module('hellenicApp')
  .config(function ($stateProvider) {
    $stateProvider
	.state('create_generatecreditnote', {
        url: '/generatecreditnote/create',
        templateUrl: 'app/generatecreditnote/create/create.html',
        controller: 'generatecreditnoteCreateCtrl',
        authenticate: true
      })
    .state('list_generatecreditnote', {
        url: '/generatecreditnote/list',
        templateUrl: 'app/generatecreditnote/list/list.html',
        controller: 'generatecreditnoteListCtrl',
        authenticate: true
      })
    .state('query_generatecreditnote', {
        url: '/generatecreditnote/query/:id',
        templateUrl: 'app/generatecreditnote/query/query.html',
        controller: 'generatecreditnoteQueryCtrl',
        authenticate: true
      })
      .state('update_generatecreditnote', {
        url: '/generatecreditnote/update/:id',
        templateUrl: 'app/generatecreditnote/update/update.html',
        controller: 'generatecreditnoteUpdateCtrl',
        authenticate: true
      });
  });

