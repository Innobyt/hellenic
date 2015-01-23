'use strict';

describe('Controller: customertableQueryCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var customertableQueryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    customertableQueryCtrl = $controller('customertableQueryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
