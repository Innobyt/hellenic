'use strict';

var systemutilities = require('./systemutilities.model');

/**
 * Get system utilities collection
 */
exports.index = function(req, res){
	// returns all documents from a collection and returns all fields for the documents.
    systemutilities.find(function(err, collection_systemutilities){
		// a generic error message, given when an unexpected condition was enco
		// untered and no more specific message is suitable.
    	if(err) return handleError(res, err);
    	// return document found
        res.json(collection_systemutilities);
    });
}

/**
 * Get system utilities entry
 */
exports.show = function(req, res){
	// get params id
	var queryid = req.params.id;
	// finds a single document by id
    systemutilities.findById(queryid, function(err, found){
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
* Create new system utilities
*/
exports.create = function(req, res){
	var save_systemutilities = new systemutilities(req.body);
	// save system utilities entry in system utilities collection
	save_systemutilities.save(function(err) {
		// the request was well-formed but was unable to be followed due to sem
		// antic errors.
		if(err) return validationError(res, err);
		// the request has been fulfilled and resulted in a new resource being 
		// created.
		res.json(201);
	});
}

/**
 * Update system utilities document 
 */
exports.update = function(req, res){
	// get document system utilities document id
	var id = req.params.id;
	// get document system utilities document id update fields
	var update = req.body;
	// update system utilities collection document of id query, with update properties of update
	systemutilities.findByIdAndUpdate(id, update, function(err, numberAffected, raw){
		// the request was well-formed but was unable to be followed due to sem
		// antic errors.
		if(err) return validationError(res, err);
		// standard response for successful HTTP requests.
		res.json(200);
	});
}

/**
 * Deletes system utilities entry
 */
exports.destroy = function(req, res){
	// get document system utilities document id
	var id = req.params.id;
	// finds a matching document, removes it, passing the found document (if any) to the callback.
	systemutilities.findByIdAndRemove(id, function(err, found) {
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