'use strict';

var customer = require('./customer.model');

/**
 * Get vessel table collection
 */
exports.index = function(req, res){
	// returns all documents from a collection and returns all fields for the documents.
    customer.find(function(err, collection_customer){
		// a generic error message, given when an unexpected condition was enco
		// untered and no more specific message is suitable.
    	if(err) return handleError(res, err);
    	// return document found
        res.json(collection_customer);
    });
}

/**
 * Get vessel table entry
 */
exports.show = function(req, res){
	// get params id
	var queryid = req.params.id;
	// finds a single document by id
    customer.findById(queryid, function(err, found){
		// a generic error message, given when an unexpected condition was enco
		// untered and no more specific message is suitable.
        if (err) return handleError(res, err);
		// the server cannot or will not process the request due to something t
		// hat is perceived to be a client error.
        if (!found) return http_error_badrequest(res, err);
        // return document found
        res.json(found);
    });
}

/**
* Create new vessel table
*/
exports.create = function(req, res){
	var save_customer = new customer(req.body);
	// save vessel table entry in vessel table collection
	save_customer.save(function(err) {
		// the request was well-formed but was unable to be followed due to sem
		// antic errors.
		if(err) return validationError(res, err);
		// the request has been fulfilled and resulted in a new resource being 
		// created.
		res.json(201);
	});
}

/**
 * Update vessel table document 
 */
exports.update = function(req, res){
	// get document vessel table document id
	var id = req.params.id;
	// get document vessel table document id update fields
	var update = req.body;
	// update vessel table collection document of id query, with update properties of update
	customer.findByIdAndUpdate(id, update, function(err, numberAffected, raw){
		// the request was well-formed but was unable to be followed due to sem
		// antic errors.
		if(err) return validationError(res, err);
		// standard response for successful HTTP requests.
		res.json(200);
	});
}

/**
 * Deletes vessel table entry
 */
exports.destroy = function(req, res){
	// get document vessel table document id
	var id = req.params.id;
	// finds a matching document, removes it, passing the found document (if any) to the callback.
	customer.findByIdAndRemove(id, function(err, found) {
		// a generic error message, given when an unexpected condition was enco
		// untered and no more specific message is suitable.
		if(err) return handleError(res, err);
		// 204 No Content - response to a successful delete request
		res.json(204); 
	});
}

/**
 * 500 Internal Server Error
 * A generic error message, given when an unexpected condition was encountered 
 * and no more specific message is suitable.
 */
function handleError(res, err) {
  return res.send(500, err);
 };

/**
 * 422 Unprocessable Entity
 * The request was well-formed but was unable to be followed due to semantic er
 * rors.
 */
function validationError(res, err) {
  return res.json(422, err);
};

/**
 * 404 Not Found
 * The requested resource could not be found but may be available again in the 
 * future. Subsequent requests by the client are permissible.
 */
function http_error_notfound(res, err) {
  return res.json(404, err);
};

/**
 * 400 Bad Request
 * The server cannot or will not process the request due to something that is p
 * erceived to be a client error.
 */
function http_error_badrequest(res, err) {
  return res.json(400, err);
};