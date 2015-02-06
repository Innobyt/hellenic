'use strict';

angular.module('hellenicApp')
  .config(function ($stateProvider) {
    $stateProvider
	.state('create_generatedisbursementaccount', {
        url: '/generatedisbursementaccount/create',
        templateUrl: 'app/generatedisbursementaccount/create/create.html',
        controller: 'generatedisbursementaccountCreateCtrl',
        authenticate: true
      })
    .state('list_generatedisbursementaccount', {
        url: '/generatedisbursementaccount/list',
        templateUrl: 'app/generatedisbursementaccount/list/list.html',
        controller: 'generatedisbursementaccountListCtrl',
        authenticate: true
      })
    .state('query_generatedisbursementaccount', {
        url: '/generatedisbursementaccount/query/:id',
        templateUrl: 'app/generatedisbursementaccount/query/query.html',
        controller: 'generatedisbursementaccountQueryCtrl',
        authenticate: true
      })
      .state('update_generatedisbursementaccount', {
        url: '/generatedisbursementaccount/update/:id',
        templateUrl: 'app/generatedisbursementaccount/update/update.html',
        controller: 'generatedisbursementaccountUpdateCtrl',
        authenticate: true
      });
  });