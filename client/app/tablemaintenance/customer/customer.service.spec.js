'use strict';

describe('Service: tablemaintenance_customer', function () {

  // load the service's module
  beforeEach(module('hellenicApp'));

  // instantiate service
  var tablemaintenance_customer;
  beforeEach(inject(function (_tablemaintenance_customer_) {
    tablemaintenance_customer = _tablemaintenance_customer_;
  }));

  it('should do something', function () {
    expect(!!tablemaintenance_customer).toBe(true);
  });

});
