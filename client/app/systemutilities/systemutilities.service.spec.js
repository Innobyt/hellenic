'use strict';

describe('Service: systemutilities', function () {

  // load the service's module
  beforeEach(module('hellenicApp'));

  // instantiate service
  var systemutilities;
  beforeEach(inject(function (_systemutilities_) {
    systemutilities = _systemutilities_;
  }));

  it('should do something', function () {
    expect(!!systemutilities).toBe(true);
  });

});
