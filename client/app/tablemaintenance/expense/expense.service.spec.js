'use strict';

describe('Service: tablemaintenance_expense', function () {

  // load the service's module
  beforeEach(module('hellenicApp'));

  // instantiate service
  var tablemaintenance_expense;
  beforeEach(inject(function (_tablemaintenance_expense_) {
    tablemaintenance_expense = _tablemaintenance_expense_;
  }));

  it('should do something', function () {
    expect(!!tablemaintenance_expense).toBe(true);
  });

});
