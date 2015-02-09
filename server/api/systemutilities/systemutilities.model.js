'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * systemutilities Schema
 */
var systemutilities = new Schema({
    created 		: String,
    user 			: String,
    name            : String,
    email        	: String,
    location 		: String,
    username 		: String,
    password        : String,
    company_name    : String,
    company_address : String,
    gst_reg_no      : String,
    gst             : String
});

module.exports = mongoose.model('systemutilities', systemutilities);