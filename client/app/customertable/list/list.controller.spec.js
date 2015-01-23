'use strict';

describe('Controller: customertableListCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var customertableListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    customertableListCtrl = $controller('customertableListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
