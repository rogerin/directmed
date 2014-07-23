module.exports = function(app){
	var mongoose = require('mongoose');

	var Schema = mongoose.Schema;
	var ObjectId = mongoose.Schema.Types.ObjectId;

	var referenciado = new Schema({
		user: 				{ type: ObjectId, ref: 'User' },
		profissao: 			{ type:String, 	default: ""},
		numero_conselho: 	{ type:String, 	default: ""},
		estado_conselho: 	{ type:String, 	default: ""},
		nome_divulgacao: 	{ type:String, 	default: ""},


		especialidade:		{ type:String, 	default: ""},
		servico_medicos:	{ type:String, 	default: ""},
		especialidade_medicos:		{ type:String, 	default: ""},
		especialidade_odontologia:	{ type:String, 	default: ""},
		outro: 						{ type:String, 	default: ""},
		created_at: {type: Date, default: Date.now}
	});

	return mongoose.model('Referenciado', referenciado);
}