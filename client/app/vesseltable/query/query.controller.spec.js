'use strict';

describe('Controller: vesseltableQueryCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var vesseltableQueryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    vesseltableQueryCtrl = $controller('vesseltableQueryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
