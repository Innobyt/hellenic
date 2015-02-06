'use strict';

describe('Controller: generatedisbursementaccountCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var generatedisbursementaccountCreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    generatedisbursementaccountCreateCtrl = $controller('generatedisbursementaccountCreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
