module.exports = function(app){
	var User	= app.models.user;
	var Cobranca= app.models.cobranca;

	var config = require("../config/config.json");

	var HomeController = {
		index: function(req,res){

			var url_transasao;
			var token;
			if(config.producao) {
				url_transasao 	= config.pagamento.producao.url_transasao;
				token 			= config.pagamento.producao.token;
			} else {
				url_transasao 	= config.pagamento.teste.url_transasao;
				token 			= config.pagamento.teste.token;

			}


			var cobranca = null;

			Cobranca.find({ 'user': req.user._id }, function(err,result){
				if (err) {
						console.log(err);
				}
				else {
					//console.log("Sucesso" + result);
					res.render('index', 
						{	
							menu: 'index',
							user: req.user,
							config: config,
							cobranca: result,
							url_transasao: url_transasao,
							token: token,
							url_resposta: config.url_notification,
							total_cobranca: result.length
						}
					);
				}
			});

			
		},
		formContato: function(req, res){
			res.render('contato/form-contato', {
				menu: 'resumo',
				user: req.user
			});
		},
		confirmarSolicitacao: function(req, res) {

			var nodemailer = require("nodemailer");
			var smtpTransport = nodemailer.createTransport("SMTP",{
		    	service: "Gmail",
			    auth: {
			        user: "geriofilho@gmail.com",
			        pass: "yolandaa"
			    }
			});

			if(req.user.endereco) {
				var texto = 'Idenrificação do usuário: ' + req.user._id + '<br/> Nome:   ' + req.user.nome + '<br/> E-Mail: ' + req.user.email+ '<br/> Telefones: ' + req.user.telefone.ddd_fixo +' ' + req.user.telefone.telefone_fixo + ' / ' + req.user.telefone.ddd_celular + ' ' + req.user.telefone.telefone_celular + '<br/> Endereço: ' + req.user.endereco.endereco + ', ' + req.user.endereco.numero + ', ' + req.user.endereco.bairro + ', ' + req.user.endereco.cidade + ' - ' + req.user.endereco.estado + ', ' + req.user.endereco.cep + ' <br/>';
			}
			else {
				var texto = 'Idenrificação do usuário: ' + req.user._id + '<br/> Nome:   ' + req.user.nome + '<br/> E-Mail: ' + req.user.email+ '<br/> Telefones: ' + req.user.telefone.ddd_fixo +' ' + req.user.telefone.telefone_fixo + ' / ' + req.user.telefone.ddd_celular + ' ' + req.user.telefone.telefone_celular + '<br/> ';
			}

			
			var mailOptions = {
			    from: "Direct MED ✔ <geriofilho@gmail.com>", // sender address
			    to: "geriofilho@gmail.com", // list of receivers
			    subject: "Solicitação Cartão ✔", // Subject line
			    //text: "Hello world ✔", // plaintext body
			    html: texto // html body
			};		

			smtpTransport.sendMail(mailOptions, function(error, response){
			    if(error){
			        console.log(error);
			        req.flash('info', 'Erro ao solicitar Cartão!!');
					res.redirect('/solicitar-directmed');
			    }else{
			        console.log("Message sent: " + response.message);
			        req.flash('info', 'Solicitação confirmada, aguarde um de nossos consultores entrar em contato com você.');
					res.redirect('/');
			    }	
			});
		},
		solicitarReferenciado: function(req, res){
			res.render('referenciados/solicitar-referenciado', {
				menu: 'resumo',
				user: req.user
			});
		},
		confirmarReferenciado: function(req, res){

		},


	}

	return HomeController;
}