'use strict';

describe('Controller: systemutilitiesQueryCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var systemutilitiesQueryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    systemutilitiesQueryCtrl = $controller('systemutilitiesQueryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
