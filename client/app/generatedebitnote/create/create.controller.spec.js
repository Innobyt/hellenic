'use strict';

describe('Controller: generatedebitnoteCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var generatedebitnoteCreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    generatedebitnoteCreateCtrl = $controller('generatedebitnoteCreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
