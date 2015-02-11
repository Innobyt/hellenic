'use strict';

describe('Controller: tablemaintenance_expenseUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var tablemaintenance_expenseUpdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    tablemaintenance_expenseUpdateCtrl = $controller('tablemaintenance_expenseUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
