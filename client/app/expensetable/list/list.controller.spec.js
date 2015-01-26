'use strict';

describe('Controller: expensetableListCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var expensetableListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    expensetableListCtrl = $controller('expensetableListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
