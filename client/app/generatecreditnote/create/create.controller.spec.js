'use strict';

describe('Controller: generatecreditnoteCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var generatecreditnoteCreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    generatecreditnoteCreateCtrl = $controller('generatecreditnoteCreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
