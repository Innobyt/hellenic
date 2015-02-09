'use strict';

describe('Controller: systemutilitiesListCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var systemutilitiesListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    systemutilitiesListCtrl = $controller('systemutilitiesListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
