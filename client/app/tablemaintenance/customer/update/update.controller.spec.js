'use strict';

describe('Controller: tablemaintenance_customerUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var tablemaintenance_customerUpdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    tablemaintenance_customerUpdateCtrl = $controller('tablemaintenance_customerUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
