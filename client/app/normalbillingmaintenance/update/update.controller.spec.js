'use strict';

describe('Controller: normalbillingmaintenanceUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var normalbillingmaintenanceUpdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    normalbillingmaintenanceUpdateCtrl = $controller('normalbillingmaintenanceUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
