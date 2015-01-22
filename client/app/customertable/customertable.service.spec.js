'use strict';

describe('Service: customertable', function () {

  // load the service's module
  beforeEach(module('hellenicApp'));

  // instantiate service
  var customertable;
  beforeEach(inject(function (_customertable_) {
    customertable = _customertable_;
  }));

  it('should do something', function () {
    expect(!!customertable).toBe(true);
  });

});
