module.exports = function(app){
	var mongoose = require('mongoose');

	var Schema = mongoose.Schema;

	var referenciado = new Schema({
		cpf: String,
		email: String,
		password: String,
		created_at: {type: Date, default: Date.now}
	});

	return mongoose.model('Referenciado', referenciado);
}