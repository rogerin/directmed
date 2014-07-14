module.exports = function(app){
	var pass = require('./../middleware/password'),
		User	= app.models.user; 

	var UserController = {
		index: function(req,res){
			User.find(function(err, users){
				if(err) {
					console.log("Erro ao listar usuarios: " + err);
				} else {
					res.render('user/listar', 	{
													menu: 'usuario',
													users:users,
													user: req.user
												}
					);
				}
			});
		},
		cadastrar: function(req,res){
			res.render('user/cadastrar',	{
												menu: 'usuario',
												user: req.user
											}
			);
		},
		add: function(req,res){
			var u = new User;

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
			u.endereco.complemento= req.body.complemento;


			u.email 			= req.body.email;
				
			u.telefone.ddd_fixo 	= req.body.ddd_fixo;
			u.telefone.telefone_fixo= req.body.telefone_fixo;
			
			u.telefone.ddd_celular 	= req.body.ddd_celular;
			u.telefone.telefone_celular = req.body.telefone_celular;
			
			u.password 			= pass.hash(req.body.password);
			
			u.save(function(err, result){
				if(err) {
					req.flash('info', 'Erro:' + err);
					res.redirect('/');
				} else {
					req.flash('info', 'Sucesso ao cadastrar novo usuário: ' + result.nome);
					res.redirect('/user/'+result._id+'/visualizar'); 
				}
			});

		},
		visualizar: function(req,res) {
			User.findById(req.params.id, function(err, result){
				if(err) { console.log(err) }
				else {
					res.render('user/visualizar', 	{
														menu: 'usuario',
														usuario: result,
														user: req.user
													}
					)
				}
			});
			
		},
		editar: function(req,res) {
			User.findById(req.params.id, function(err, result){
				if(err) { console.log(err) }
				else {
					res.render('user/editar', 	{
														menu: 'config',
														usuario: result,
														user: req.user,
														itens: [ 'Selecione o sexo', 'M', 'F']
													}
					)
				}
			});
			
		},
		update: function(req, res){
			User.findById(req.body._id, function(err, u){

				u.nome				= req.body.nome;
				u.cpf				= req.body.cpf;
				u.cnpj 				= req.body.cnpj;
				u.data_nascimento	= req.body.data_nascimento;
				u.sexo 				= req.body.sexo;
				u.tipo_user			= req.user.tipo_user;
				u.endereco.cep 		= req.body.cep;
				u.endereco.endereco = req.body.endereco;
				u.endereco.numero 	= req.body.numero;
				u.endereco.bairro 	= req.body.bairro;
				u.endereco.cidade 	= req.body.cidade;
				u.endereco.estado 	= req.body.estado;
				u.endereco.complemento= req.body.complemento;


				u.email 			= req.body.email;
					
				u.telefone.ddd_fixo 	= req.body.ddd_fixo;
				u.telefone.telefone_fixo= req.body.telefone_fixo;
				
				u.telefone.ddd_celular 	= req.body.ddd_celular;
				u.telefone.telefone_celular = req.body.telefone_celular;
				
				u.password 			= pass.hash(req.body.password);


				u.save(function(err, user){
					if(err) { console.log(err);}
					else {
						req.flash('info', 'Usuário editado com sucesso!');
						res.render('user/visualizar', 	{
														menu: 'config',
														usuario: user,
														user: req.user
													}
						)
					}
				})
			})
		}


	};

	return UserController;
}