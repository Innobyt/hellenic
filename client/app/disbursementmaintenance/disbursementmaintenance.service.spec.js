'use strict';

describe('Service: disbursementmaintenance', function () {

  // load the service's module
  beforeEach(module('hellenicApp'));

  // instantiate service
  var disbursementmaintenance;
  beforeEach(inject(function (_disbursementmaintenance_) {
    disbursementmaintenance = _disbursementmaintenance_;
  }));

  it('should do something', function () {
    expect(!!disbursementmaintenance).toBe(true);
  });
});