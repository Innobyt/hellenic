'use strict';

describe('Controller: tablemaintenance_customerListCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var tablemaintenance_customerListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    tablemaintenance_customerListCtrl = $controller('tablemaintenance_customerListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
