module.exports = function(app){
	var HomeController = {
		index: function(req,res){
			res.render('index', {
				menu: 'resumo',
				user: req.user
			});
		},
		formContato: function(req, res){
			res.render('contato/form-contato', {
				menu: 'config',
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
		}

	}

	return HomeController;
}