'use strict';

describe('Service: billingmaintenancedebit', function () {

  // load the service's module
  beforeEach(module('hellenicApp'));

  // instantiate service
  var billingmaintenancedebit;
  beforeEach(inject(function (_billingmaintenancedebit_) {
    billingmaintenancedebit = _billingmaintenancedebit_;
  }));

  it('should do something', function () {
    expect(!!billingmaintenancedebit).toBe(true);
  });

});
