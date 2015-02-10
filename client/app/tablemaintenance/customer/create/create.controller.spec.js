'use strict';

describe('Controller: tablemaintenance_customerCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var tablemaintenance_customerCreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    tablemaintenance_customerCreateCtrl = $controller('tablemaintenance_customerCreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
