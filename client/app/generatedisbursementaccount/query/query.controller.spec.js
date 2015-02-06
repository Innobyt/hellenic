'use strict';

describe('Controller: generatedisbursementaccountQueryCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var generatedisbursementaccountQueryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    generatedisbursementaccountQueryCtrl = $controller('generatedisbursementaccountQueryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
