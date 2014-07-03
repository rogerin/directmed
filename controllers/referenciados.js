module.exports = function(app){
	var crypto = require('crypto');
	var Referenciado = app.models.referenciado;
	var Financeiro = app.models.financeiro;
	var nodemailer = require("nodemailer");
	var md5 = crypto.createHash('md5');


	var RefController = {
		index: function(req,res){
			Referenciado.find(function(err, referenciados){
				if(err) {
					console.log("Erro ao listar gavetas: " + err);
				} else {
					res.render('referenciados/listar', {referenciados:referenciados});
				}
			});
		},
		cadastrar: function(req,res){
			res.render('referenciados/cadastrar');
		},
		add: function(req,res){
			var dateCrypt = Date.now();
			new Referenciado({
					cpf: req.body.cpf,
					email: req.body.email,
					password: req.body.password
				}).
				save(function(err,ref){

					if(err) { console.log("Erro ao cadastrar: " + err); }
					else {
						new Financeiro({
							referenciado: ref._id,
							id_crypto: dateCrypt
						}).save(function(err){


		var smtpTransport = nodemailer.createTransport("SMTP",{
		    service: "Gmail",
		    auth: {
		        user: "geriofilho@gmail.com",
		        pass: "yolandaa"
		    }
		});

		// setup e-mail data with unicode symbols
		var mailOptions = {
		    from: "Direct MED ✔ <geriofilho@gmail.com>", // sender address
		    to: req.body.email, // list of receivers
		    subject: "DirectMed ✔", // Subject line
		    text: "Hello world ✔", // plaintext body																				// 
		    html: "<h2> Finalize o pagamento </h2><form method=\"post\" action=\"https://checkout.sandbox.tray.com.br/payment/transaction\"><input type=\"hidden\" name=\"token_account\" value=\"7fe49d0444e9ba9\"><input type=\"hidden\" name=\"url_notification\" value=\"http://directmed.herokuapp.com/financeiro/resposta\"><input type=\"hidden\" name=\"transaction_product[][description]\" value=\"Cadastro DirectMed\"><input type=\"hidden\" name=\"transaction_product[][quantity]\" value=\"1\"><input type=\"hidden\" name=\"transaction_product[][price_unit]\" value=\"40.00\"><input type=\"hidden\" name=\"order_number\" value=\""+dateCrypt+"\"><input type=\"submit\" name=\"submit\" value=\"Finalize seu pagamento!!\"></form>" // html body
		}

		// send mail with defined transport object
		smtpTransport.sendMail(mailOptions, function(error, response){
		    if(error){
		        console.log(error);
		    }else{
		        console.log("Message sent: " + response.message);
		    }

		    // if you don't want to use this transport object anymore, uncomment following line
		    //smtpTransport.close(); // shut down the connection pool, no more messages
		});




							res.redirect('/financeiro');
						});
					}
				});
		}

	}

	return RefController;
}