'use strict';

describe('Controller: disbursementmaintenanceUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var disbursementmaintenanceUpdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    disbursementmaintenanceUpdateCtrl = $controller('disbursementmaintenanceUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
