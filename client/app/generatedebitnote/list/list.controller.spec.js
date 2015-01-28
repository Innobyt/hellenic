'use strict';

describe('Controller: generatedebitnoteListCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var generatedebitnoteListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    generatedebitnoteListCtrl = $controller('generatedebitnoteListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
