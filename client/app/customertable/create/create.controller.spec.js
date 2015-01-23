'use strict';

describe('Controller: customertableCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var customertableCreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    customertableCreateCtrl = $controller('customertableCreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
