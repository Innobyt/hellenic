'use strict';

describe('Controller: QueryCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var QueryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QueryCtrl = $controller('QueryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
