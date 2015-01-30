'use strict';

angular
    .module('hellenicApp')
    .factory('billingmaintenancedebit', billingmaintenancedebit);

billingmaintenancedebit.$inject = ['$resource'];

function billingmaintenancedebit($resource) {
    return $resource('/api/billingmaintenance/:id', { id: '@id' },
    {
      'update': { method: 'PUT',},
      'view': { method: 'GET', isArray: true},
      'query': { method: 'GET', isArray: false }
    });
  }