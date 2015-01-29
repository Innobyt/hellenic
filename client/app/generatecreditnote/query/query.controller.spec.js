'use strict';

describe('Controller: generatecreditnoteQueryCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var generatecreditnoteQueryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    generatecreditnoteQueryCtrl = $controller('generatecreditnoteQueryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
