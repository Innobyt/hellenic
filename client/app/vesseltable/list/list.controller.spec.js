'use strict';

describe('Controller: vesseltableListCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var vesseltableListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    vesseltableListCtrl = $controller('vesseltableListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
