'use strict';

describe('Controller: vesseltableCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var vesseltableCreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    vesseltableCreateCtrl = $controller('vesseltableCreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
