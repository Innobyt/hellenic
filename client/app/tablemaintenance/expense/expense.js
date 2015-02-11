'use strict';

angular.module('hellenicApp')
  .config(function ($stateProvider) {
    $stateProvider
	.state('create_tablemaintenance_expense', {
        url: '/tablemaintenance/expense/create',
        templateUrl: 'app/tablemaintenance/expense/create/create.html',
        controller: 'tablemaintenance_expenseCreateCtrl',
        authenticate: true
      })
    .state('list_tablemaintenance/expense', {
        url: '/tablemaintenance/expense/list',
        templateUrl: 'app/tablemaintenance/expense/list/list.html',
        controller: 'tablemaintenance_expenseListCtrl',
        authenticate: true
      })
    .state('query_tablemaintenance/expense', {
        url: '/tablemaintenance/expense/query/:id',
        templateUrl: 'app/tablemaintenance/expense/query/query.html',
        controller: 'tablemaintenance_expenseQueryCtrl',
        authenticate: true
      })
      .state('update_tablemaintenance/expense', {
        url: '/tablemaintenance/expense/update/:id',
        templateUrl: 'app/tablemaintenance/expense/update/update.html',
        controller: 'tablemaintenance_expenseUpdateCtrl',
        authenticate: true
      });
  });

