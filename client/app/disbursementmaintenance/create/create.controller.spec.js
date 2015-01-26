'use strict';

describe('Controller: disbursementmaintenanceCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var disbursementmaintenanceCreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    disbursementmaintenanceCreateCtrl = $controller('disbursementmaintenanceCreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
