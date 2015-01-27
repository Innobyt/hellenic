'use strict';

describe('Controller: disbursementmaintenanceListCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var disbursementmaintenanceListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    disbursementmaintenanceListCtrl = $controller('disbursementmaintenanceListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
