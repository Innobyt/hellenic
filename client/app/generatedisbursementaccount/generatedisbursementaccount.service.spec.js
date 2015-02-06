'use strict';

describe('Service: generatedisbursementaccount', function () {

  // load the service's module
  beforeEach(module('hellenicApp'));

  // instantiate service
  var generatedisbursementaccount;
  beforeEach(inject(function (_generatedisbursementaccount_) {
    generatedisbursementaccount = _generatedisbursementaccount_;
  }));

  it('should do something', function () {
    expect(!!generatedisbursementaccount).toBe(true);
  });

});
