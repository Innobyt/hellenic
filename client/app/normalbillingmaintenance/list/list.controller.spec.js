'use strict';

describe('Controller: normalbillingmaintenanceListCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var normalbillingmaintenanceListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    normalbillingmaintenanceListCtrl = $controller('normalbillingmaintenanceListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
