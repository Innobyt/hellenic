'use strict';

describe('Controller: expensetableUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var expensetableUpdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    expensetableUpdateCtrl = $controller('expensetableUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});