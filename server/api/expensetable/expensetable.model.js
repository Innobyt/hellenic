'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * expensetable Schema
 */
var expensetable = new Schema({
    created 		: String,
    user 			: String,
    gst 			: String,
    desc 			: String,
    hide 			: String,
    accode 			: String,
    approval 		: String
});

module.exports = mongoose.model('expensetable', expensetable);