'use strict';

angular
    .module('hellenicApp')
    .factory('tablemaintenance_customer', tablemaintenance_customer);

tablemaintenance_customer.$inject = ['$resource'];

function tablemaintenance_customer($resource) {
    return $resource('/api/tablemaintenance_customer/:id', { id: '@id' },
    {
      'update': { method: 'PUT',},
      'view': { method: 'GET', isArray: true},
      'query': { method: 'GET', isArray: false }
    });
  }
