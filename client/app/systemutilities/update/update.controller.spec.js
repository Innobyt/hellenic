'use strict';

describe('Controller: systemutilitiesUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var systemutilitiesUpdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    systemutilitiesUpdateCtrl = $controller('systemutilitiesUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});