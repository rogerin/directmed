module.exports = function(app){
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	/*
		tipo_user
			1 = admin
			2 = usuario_sistema
			3 = referenciado
			4 = usuario_referenciado
			5 = cliente
	
			u.nome				= req.body.nome;
			u.cpf				= req.body.cpf;
			u.cnpj 				= req.body.cnpj;
			u.data_nascimento	= req.body.data_nascimento;
			u.sexo 				= req.body.sexo;
			u.tipo_user			= 2;
			u.endereco.cep 		= req.body.cep;
			u.endereco.endereco = req.body.endereco;
			u.endereco.numero 	= req.body.numero;
			u.endereco.bairro 	= req.body.bairro;
			u.endereco.cidade 	= req.body.cidade;
			u.endereco.estado 	= req.body.estado;
	*/

	var user = new Schema({
		nome: String,
		email: { type: String, unique: true },
		password: String,
		cpf: String,
		cnpj: String,
		data_nascimento: String,

		tipo_user: [{ type: Number, default: 2 }],
		
		endereco: {
		    cep: String,
		    endereco: String,
			numero: String,
			bairro: String,
			cidade: String,
			estado: String,
			complemento: String	    
		},
		telefone: {
		    ddd_fixo: String,
		    telefone_fixo: String,
		    ddd_celular: String,
		    telefone_celular: String
		},
		is_admin: { type: Boolean, default: false },
		ativo: { type: Boolean, default: false },
		created_at: {type: Date, default: Date.now }
	});

	return mongoose.model('User', user);
}