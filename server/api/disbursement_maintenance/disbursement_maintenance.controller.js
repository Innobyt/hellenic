'use strict';

var disbursement_maintenance = require('./disbursement_maintenance.model');

/**
 * Get disbursement maintenance collection
 */
exports.index = function(req, res){
	// returns all documents from a collection and returns all fields for the documents.
    disbursement_maintenance.find(function(err, collection_disbursement_maintenance){
    	// return error else return json collection_disbursement_maintenance
        return err ? handleError(res, err) : res.json(collection_disbursement_maintenance);
    });
}

/**
 * Get disbursement maintenance entry
 */
exports.show = function(req, res){
	var queryid = req.params.id;
    disbursement_maintenance.findById(queryid, function(err, doc){
        if (err) return handleError(res, err);
        if (!doc) return http_error_notfound(res, err);
        res.json(doc);
    });
}

/**
* Create new disbursement maintenance
*/
exports.create = function(req, res){
	var save_disbursement_maintenance = new disbursement_maintenance(req.body);
	// save disbursement maintenance entry in disbursement maintenance collection
	save_disbursement_maintenance.save(function(err, disbursement_maintenance_entry) {
		// return validation error else return 201 created response
		return err ? validationError(res, err) : res.json(201); // 201 Created
	});
}

/**
 * Update disbursement maintenance document 
 */
exports.update = function(req, res){
	
	// get document disbursement maintenance document id
	var id = req.params.id;

	// get document disbursement maintenance document id update fields
	var update = req.body;

	// update disbursement maintenance collection document of id query, with update properties of update
	disbursement_maintenance.findByIdAndUpdate(id, update, function(err, numberAffected, raw){
		if(err) return handleError(res, err);
		if(!numberAffected) return http_error_badrequest(res, err);
		res.json(200);
	});
}

/**
 * Deletes disbursement maintenance entry
 */
exports.destroy = function(req, res){
  disbursement_maintenance.findByIdAndRemove(req.params.id, function(err, doc) {
	return err ? handleError(res, err) : res.json(204); // 204 No Content - response to a successful delete request
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