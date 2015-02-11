'use strict';

angular
    .module('hellenicApp')
    .factory('tablemaintenance_expense', tablemaintenance_expense);

tablemaintenance_expense.$inject = ['$resource'];

function tablemaintenance_expense($resource) {
    return $resource('/api/tablemaintenance_expense/:id', { id: '@id' },
    {
      'update': { method: 'PUT',},
      'view': { method: 'GET', isArray: true},
      'query': { method: 'GET', isArray: false }
    });
  }
