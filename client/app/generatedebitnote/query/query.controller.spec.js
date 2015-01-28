'use strict';

describe('Controller: generatedebitnoteQueryCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var generatedebitnoteQueryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    generatedebitnoteQueryCtrl = $controller('generatedebitnoteQueryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
