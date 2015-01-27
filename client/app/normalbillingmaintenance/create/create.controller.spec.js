'use strict';

describe('Controller: normalbillingmaintenanceCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var normalbillingmaintenanceCreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    normalbillingmaintenanceCreateCtrl = $controller('normalbillingmaintenanceCreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
