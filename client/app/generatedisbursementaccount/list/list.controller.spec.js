'use strict';

describe('Controller: generatedisbursementaccountListCtrl', function () {

  // load the controller's module
  beforeEach(module('hellenicApp'));

  var generatedisbursementaccountListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    generatedisbursementaccountListCtrl = $controller('generatedisbursementaccountListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
