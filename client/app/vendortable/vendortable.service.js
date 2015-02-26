'use strict';

angular
    .module('hellenicApp')
    .factory('vendortable', vendortable);

vendortable.$inject = ['$resource'];

function vendortable($resource) {
    return $resource('/api/vendortable/:id', { id: '@id' },
    {
      'update': { method: 'PUT',},
      'view': { method: 'GET', isArray: true},
      'query': { method: 'GET', isArray: false }
    });
  }
