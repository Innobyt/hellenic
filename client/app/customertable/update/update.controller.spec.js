'use strict';

describe('Controller: customertableUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var customertableUpdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    customertableUpdateCtrl = $controller('customertableUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
