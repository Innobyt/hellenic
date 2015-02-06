'use strict';

describe('Controller: generatedisbursementaccountUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var generatedisbursementaccountUpdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    generatedisbursementaccountUpdateCtrl = $controller('generatedisbursementaccountUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});