'use strict';

describe('Controller: generatecreditnoteUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var generatecreditnoteUpdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    generatecreditnoteUpdateCtrl = $controller('generatecreditnoteUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
