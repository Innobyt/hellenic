'use strict';

describe('Controller: billingmaintenancecreditListCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var billingmaintenancecreditListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    billingmaintenancecreditListCtrl = $controller('billingmaintenancecreditListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
