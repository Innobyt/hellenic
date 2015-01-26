'use strict';

angular
    .module('hellenicApp')
    .factory('disbursementmaintenance', disbursementmaintenance);

disbursementmaintenance.$inject = ['$resource'];

function disbursementmaintenance($resource) {
    return $resource('/api/disbursement_maintenance/:id', { id: '@id' },
    {
      'update': { method: 'PUT',},
      'view': { method: 'GET', isArray: true},
      'query': { method: 'GET', isArray: false }
    });
  }