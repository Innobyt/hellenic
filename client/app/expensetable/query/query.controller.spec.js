'use strict';

describe('Controller: expensetableQueryCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var expensetableQueryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    expensetableQueryCtrl = $controller('expensetableQueryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
