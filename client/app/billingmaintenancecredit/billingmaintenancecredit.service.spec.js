'use strict';

describe('Service: billingmaintenancecredit', function () {

  // load the service's module
  beforeEach(module('hellenicApp'));

  // instantiate service
  var billingmaintenancecredit;
  beforeEach(inject(function (_billingmaintenancecredit_) {
    billingmaintenancecredit = _billingmaintenancecredit_;
  }));

  it('should do something', function () {
    expect(!!billingmaintenancecredit).toBe(true);
  });

});
