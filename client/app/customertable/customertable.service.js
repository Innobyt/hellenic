'use strict';

angular
    .module('hellenicApp')
    .factory('customertable', customertable);

customertable.$inject = ['$resource'];

function customertable($resource) {
    return $resource('/api/customer/:id', { id: '@id' },
    {
      'update': { method: 'PUT',},
      'view': { method: 'GET', isArray: true},
      'query': { method: 'GET', isArray: false }
    });
  }
