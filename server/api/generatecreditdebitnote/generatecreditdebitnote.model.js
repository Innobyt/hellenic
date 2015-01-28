'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * generatecreditdebitnote Schema
 */
var generatecreditdebitnote = new Schema({
    created             : String, 
    user                : String, 
    vessel_number       : String, 
    customer_number     : String, 
    arvd                : String, 
    print_date          : String, 
    cdnote_no           : String, 
    hide                : String,
    approval            : String
});

module.exports = mongoose.model('generatecreditdebitnote', generatecreditdebitnote);