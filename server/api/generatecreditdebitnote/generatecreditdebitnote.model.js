'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * generatecreditdebitnote Schema
 */
var generatecreditdebitnote = new Schema({
    created		: String, 
    user		: String, 
    vessel_no	: String, 
    customer_no	: String, 
    arvd		: String, 
    print_date	: String, 
    cdnote_no	: String, 
    hide		: String,
    approval	: String
});

module.exports = mongoose.model('generatecreditdebitnote', generatecreditdebitnote);