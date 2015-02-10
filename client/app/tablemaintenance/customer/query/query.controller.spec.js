'use strict';

describe('Controller: tablemaintenance_customerQueryCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var tablemaintenance_customerQueryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    tablemaintenance_customerQueryCtrl = $controller('tablemaintenance_customerQueryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
