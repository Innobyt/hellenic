'use strict';

describe('Controller: generatecreditnoteListCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var generatecreditnoteListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    generatecreditnoteListCtrl = $controller('generatecreditnoteListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
