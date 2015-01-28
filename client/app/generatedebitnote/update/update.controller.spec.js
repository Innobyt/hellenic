'use strict';

describe('Controller: generatedebitnoteUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var generatedebitnoteUpdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    generatedebitnoteUpdateCtrl = $controller('generatedebitnoteUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
