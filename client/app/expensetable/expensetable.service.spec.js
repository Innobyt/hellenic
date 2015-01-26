'use strict';

describe('Service: expensetable', function () {

  // load the service's module
  beforeEach(module('hellenicApp'));

  // instantiate service
  var expensetable;
  beforeEach(inject(function (_expensetable_) {
    expensetable = _expensetable_;
  }));

  it('should do something', function () {
    expect(!!expensetable).toBe(true);
  });

});
