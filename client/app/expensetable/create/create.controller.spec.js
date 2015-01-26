'use strict';

describe('Controller: expensetableCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var expensetableCreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    expensetableCreateCtrl = $controller('expensetableCreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
