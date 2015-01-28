'use strict';

angular
    .module('hellenicApp')
    .factory('generatedebitnote', generatedebitnote);

generatedebitnote.$inject = ['$resource'];

function generatedebitnote($resource) {
    return $resource('/api/generatecreditdebitnote/:id', { id: '@id' },
    {
      'update': { method: 'PUT',},
      'view': { method: 'GET', isArray: true},
      'query': { method: 'GET', isArray: false }
    });
  }
