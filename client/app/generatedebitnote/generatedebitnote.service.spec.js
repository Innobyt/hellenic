'use strict';

describe('Service: generatedebitnote', function () {

  // load the service's module
  beforeEach(module('hellenicApp'));

  // instantiate service
  var generatedebitnote;
  beforeEach(inject(function (_generatedebitnote_) {
    generatedebitnote = _generatedebitnote_;
  }));

  it('should do something', function () {
    expect(!!generatedebitnote).toBe(true);
  });

});
