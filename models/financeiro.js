module.exports = function(app){
	var mongoose = require('mongoose');

	var Schema = mongoose.Schema;
	var ObjectId = mongoose.Schema.Types.ObjectId;
	
	var financeiro = new Schema({
		referenciado: { type: ObjectId, ref: 'Referenciado' },
		resposta: {type: ObjectId, ref: 'Resposta' },
		id_crypto: { type: Number },
		status: { type: Number, default: 1 },
		created_at: {type: Date, default: Date.now}
	});

	return mongoose.model('Financeiro', financeiro);
}