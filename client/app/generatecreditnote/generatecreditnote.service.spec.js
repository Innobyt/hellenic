'use strict';

describe('Service: generatecreditnote', function () {

  // load the service's module
  beforeEach(module('hellenicApp'));

  // instantiate service
  var generatecreditnote;
  beforeEach(inject(function (_generatecreditnote_) {
    generatecreditnote = _generatecreditnote_;
  }));

  it('should do something', function () {
    expect(!!generatecreditnote).toBe(true);
  });

});
