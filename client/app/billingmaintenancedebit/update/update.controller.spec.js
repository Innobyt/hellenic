'use strict';

describe('Controller: billingmaintenancedebitUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var billingmaintenancedebitUpdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    billingmaintenancedebitUpdateCtrl = $controller('billingmaintenancedebitUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});