'use strict';

describe('Controller: systemutilitiesCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var systemutilitiesCreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    systemutilitiesCreateCtrl = $controller('systemutilitiesCreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
