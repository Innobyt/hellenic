'use strict';

describe('Controller: billingmaintenancecreditQueryCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var billingmaintenancecreditQueryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    billingmaintenancecreditQueryCtrl = $controller('billingmaintenancecreditQueryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
