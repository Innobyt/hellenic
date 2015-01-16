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

}

/**
* Create new disbursement maintenance
*/
exports.create = function(req, res){
	var save_disbursement_maintenance = new disbursement_maintenance(req.body);
		save_disbursement_maintenance.save(function(err, disbursement_maintenance_entry) {
		return err ? validationError(res, err) : res.json(201); // 201 Created
	});
}

/**
 * 
 */
exports.update = function(req, res){

}

/**
 * 
 */
exports.update = function(req, res){

}

/**
 * Deletes disbursement maintenance entry
 */
exports.destroy = function(req, res){
  disbursement_maintenance.findByIdAndRemove(req.params.id, function(err, destroyed_disbursement_maintenance) {
	return err ? handleError(res, err) : res.json(204); // 204 No Content - response to a successful delete request
  });
}

/**
 * 500 Internal Server Error
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