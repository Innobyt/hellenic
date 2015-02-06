'use strict';

angular
    .module('hellenicApp')
    .factory('generatedisbursementaccount', generatedisbursementaccount);

generatedisbursementaccount.$inject = ['$resource'];

function generatedisbursementaccount($resource) {
    return $resource('/api/generatedisbursementaccount/:id', { id: '@id' },
    {
      'update': { method: 'PUT',},
      'view': { method: 'GET', isArray: true},
      'query': { method: 'GET', isArray: false }
    });
  }
