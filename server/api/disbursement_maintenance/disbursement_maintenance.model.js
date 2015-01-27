'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var disbursement_maintenance = new Schema({
    created         : String,
    user            : String,
    arvd            : String,
    t_date          : String,
    cd_type         : String,
    invoice_no      : String,
    vendor_acno     : String,
    invoice_date    : String,
    expense_accode  : String,
    desc            : String,
    cost            : String,
    billing         : String,
    gst             : String,
    gst_percentage  : String,
    remarks         : String,
    vessel_name     : String,
    vessel_number   : String,
    customer_number : String,
    customer_name   : String,
    drcr_number     : String,
    hide            : String,
    status        	: String,
    generated       : String

});

module.exports = mongoose.model('disbursement_maintenance', disbursement_maintenance);