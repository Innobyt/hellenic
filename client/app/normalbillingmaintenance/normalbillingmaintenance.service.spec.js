'use strict';

describe('Service: normalbillingmaintenance', function () {

  // load the service's module
  beforeEach(module('hellenicApp'));

  // instantiate service
  var normalbillingmaintenance;
  beforeEach(inject(function (_normalbillingmaintenance_) {
    normalbillingmaintenance = _normalbillingmaintenance_;
  }));

  it('should do something', function () {
    expect(!!normalbillingmaintenance).toBe(true);
  });

});
