'use strict';

angular
    .module('hellenicApp')
    .factory('expensetable', expensetable);

expensetable.$inject = ['$resource'];

function expensetable($resource) {
    return $resource('/api/expensetable/:id', { id: '@id' },
    {
      'update': { method: 'PUT',},
      'view': { method: 'GET', isArray: true},
      'query': { method: 'GET', isArray: false }
    });
  }
