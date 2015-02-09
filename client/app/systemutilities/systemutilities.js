'use strict';

angular.module('hellenicApp')
  .config(function ($stateProvider) {
    $stateProvider
	.state('create_systemutilities', {
        url: '/systemutilities/create',
        templateUrl: 'app/systemutilities/create/create.html',
        controller: 'systemutilitiesCreateCtrl',
        authenticate: true
      })
    .state('list_systemutilities', {
        url: '/systemutilities/list',
        templateUrl: 'app/systemutilities/list/list.html',
        controller: 'systemutilitiesListCtrl',
        authenticate: true
      })
    .state('query_systemutilities', {
        url: '/systemutilities/query/:id',
        templateUrl: 'app/systemutilities/query/query.html',
        controller: 'systemutilitiesQueryCtrl',
        authenticate: true
      })
      .state('update_systemutilities', {
        url: '/systemutilities/update/:id',
        templateUrl: 'app/systemutilities/update/update.html',
        controller: 'systemutilitiesUpdateCtrl',
        authenticate: true
      });
  });