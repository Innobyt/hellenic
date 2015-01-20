'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * normalbillingmaintenance Schema
 */
var normalbillingmaintenance = new Schema({
    created 			: String,
    user 				: String,
    cdtype 				: String,
	arvd 				: String,
	tdate 				: String,
	expenseaccode 		: String,
	desc 				: String,
	billing 			: String,
	gstyn 				: String,
	gstpercentage 		: String,
	remarks 			: String,
	vessel_number 		: String,
	vessel_name 		: String,
	customer_number 	: String,
	customer_name 		: String,
	dr_cr_note_number 	: String,
	hide 				: String
});

module.exports = mongoose.model('normalbillingmaintenance', normalbillingmaintenance);