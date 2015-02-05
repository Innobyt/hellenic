'use strict';

describe('Controller: billingmaintenancecreditUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var billingmaintenancecreditUpdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    billingmaintenancecreditUpdateCtrl = $controller('billingmaintenancecreditUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});