'use strict';

angular
    .module('hellenicApp')
    .factory('billingmaintenancecredit', billingmaintenancecredit);

billingmaintenancecredit.$inject = ['$resource'];

function billingmaintenancecredit($resource) {
    return $resource('/api/billingmaintenance/:id', { id: '@id' },
    {
      'update': { method: 'PUT',},
      'view': { method: 'GET', isArray: true},
      'query': { method: 'GET', isArray: false }
    });
  }
