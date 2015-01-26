'use strict';

describe('Controller: vesseltableUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var vesseltableUpdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    vesseltableUpdateCtrl = $controller('vesseltableUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
