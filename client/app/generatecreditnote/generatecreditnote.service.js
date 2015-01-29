'use strict';

angular
    .module('hellenicApp')
    .factory('generatecreditnote', generatecreditnote);

generatecreditnote.$inject = ['$resource'];

function generatecreditnote($resource) {
    return $resource('/api/generatecreditdebitnote/:id', { id: '@id' },
    {
      'update': { method: 'PUT',},
      'view': { method: 'GET', isArray: true},
      'query': { method: 'GET', isArray: false }
    });
  }
