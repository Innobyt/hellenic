'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * billingmaintenance Schema
 */
var billingmaintenance = new Schema({
    created 		: String,
    user 			: String,
    vessel_number 	: String,
    customer_name 	: String,
    type 			: String,
    arvd 			: String,
    cost            : String,
    crnotenumber    : String,
    drnotenumber    : String,
    vendor_name     : String,
    accode          : String,
    expense_desc    : String,
    hide 			: String,
    approval 		: String
});

module.exports = mongoose.model('billingmaintenance', billingmaintenance);