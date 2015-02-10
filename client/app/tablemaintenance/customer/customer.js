'use strict';

angular.module('hellenicApp')
  .config(function ($stateProvider) {
    $stateProvider
	.state('create_tablemaintenance_customer', {
        url: '/tablemaintenance/customer/create',
        templateUrl: 'app/tablemaintenance/customer/create/create.html',
        controller: 'tablemaintenance_customerCreateCtrl',
        authenticate: true
      })
    .state('list_tablemaintenance/customer', {
        url: '/tablemaintenance/customer/list',
        templateUrl: 'app/tablemaintenance/customer/list/list.html',
        controller: 'tablemaintenance_customerListCtrl',
        authenticate: true
      })
    .state('query_tablemaintenance/customer', {
        url: '/tablemaintenance/customer/query/:id',
        templateUrl: 'app/tablemaintenance/customer/query/query.html',
        controller: 'tablemaintenance_customerQueryCtrl',
        authenticate: true
      })
      .state('update_tablemaintenance/customer', {
        url: '/tablemaintenance/customer/update/:id',
        templateUrl: 'app/tablemaintenance/customer/update/update.html',
        controller: 'tablemaintenance_customerUpdateCtrl',
        authenticate: true
      });
  });

