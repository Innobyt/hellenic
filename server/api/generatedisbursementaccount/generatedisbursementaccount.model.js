'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * generatedisbursementaccount Schema
 */
var generatedisbursementaccount = new Schema({
    created 	: String,
    user 		: String,
    vessel_no 	: String,
    customer_no : String,
    arvd 		: String,
    disb_no 	: String,
    disb_date 	: String,
    sailed_date : String,
    hide 		: String,
    approval 	: String
});

module.exports = mongoose.model('generatedisbursementaccount', generatedisbursementaccount);