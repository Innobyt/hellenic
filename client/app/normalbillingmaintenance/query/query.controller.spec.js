'use strict';

describe('Controller: normalbillingmaintenanceQueryCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var normalbillingmaintenanceQueryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    normalbillingmaintenanceQueryCtrl = $controller('normalbillingmaintenanceQueryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
