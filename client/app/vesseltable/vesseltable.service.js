'use strict';

angular
    .module('hellenicApp')
    .factory('vesseltable', vesseltable);

vesseltable.$inject = ['$resource'];

function vesseltable($resource) {
    return $resource('/api/vesseltable/:id', { id: '@id' },
    {
      'update': { method: 'PUT',},
      'view': { method: 'GET', isArray: true},
      'query': { method: 'GET', isArray: false }
    });
  }
