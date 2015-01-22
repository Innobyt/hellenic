'use strict';

describe('Service: vesseltable', function () {

  // load the service's module
  beforeEach(module('hellenicApp'));

  // instantiate service
  var vesseltable;
  beforeEach(inject(function (_vesseltable_) {
    vesseltable = _vesseltable_;
  }));

  it('should do something', function () {
    expect(!!vesseltable).toBe(true);
  });

});
