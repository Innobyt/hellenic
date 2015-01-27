'use strict';

describe('Controller: disbursementmaintenanceQueryCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var disbursementmaintenanceQueryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    disbursementmaintenanceQueryCtrl = $controller('disbursementmaintenanceQueryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
