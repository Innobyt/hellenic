'use strict';

describe('Controller: billingmaintenancecreditCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var billingmaintenancecreditCreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    billingmaintenancecreditCreateCtrl = $controller('billingmaintenancecreditCreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
