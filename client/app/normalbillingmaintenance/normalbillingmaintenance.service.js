'use strict';

angular
    .module('hellenicApp')
    .factory('normalbillingmaintenance', normalbillingmaintenance);

normalbillingmaintenance.$inject = ['$resource'];

function normalbillingmaintenance($resource) {
    return $resource('/api/normalbillingmaintenance/:id', { id: '@id' },
    {
      'update': { method: 'PUT',},
      'view': { method: 'GET', isArray: true},
      'query': { method: 'GET', isArray: false }
    });
  }
