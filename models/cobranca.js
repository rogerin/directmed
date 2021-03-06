module.exports = function(app){
	var mongoose = require('mongoose');

	var Schema = mongoose.Schema;
	var ObjectId = mongoose.Schema.Types.ObjectId;

	 
	var cobranca = new Schema({
		user: 		{ type: ObjectId, ref: 'User' },
		resposta: 	{ type: ObjectId, ref: 'Resposta' },
		tipo: 		{ type: Number, default: 1 },
		id_cobranca: { type: String },
		status_id: 	{ type: Number, default: 0 },
		status_name:{ type: String, default: ''},
		status: 	{ type: Number, default: 1 },
		created_at: { type: Date, 	default: Date.now}
	});

	return mongoose.model('Cobranca', cobranca);
}