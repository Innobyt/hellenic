'use strict';

angular
    .module('hellenicApp')
    .factory('systemutilities', systemutilities);

systemutilities.$inject = ['$resource'];

function systemutilities($resource) {
    return $resource('/api/systemutilities/:id', { id: '@id' },
    {
      'update': { method: 'PUT',},
      'view': { method: 'GET', isArray: true},
      'query': { method: 'GET', isArray: false }
    });
  }
