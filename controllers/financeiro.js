module.exports = function(app){

	var Referenciado = app.models.referenciado;
	var Financeiro = app.models.financeiro;
	var Resposta = app.models.resposta;




	var FinanceiroController = {
		index: function(req,res){
			Financeiro
				.find()
				.populate('referenciado') // only return the Persons name
				.exec(function (err, financeiro) {
				  if (err) {
				  	console.log(err);
				  	res.send(err);
				  } else {
					  res.render('financeiro/listar', { financeiro: financeiro });
				  }
				});
		},
		resposta: function(req,res){

				new Resposta({
						token_transaction: req.body.token_transaction
					}).
					save(function(err,ref){
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
						    text: "Hello world ✔", // plaintext body
						    html: "<h1> Chegou uma requisicao </h1> "+req.body+"" // html body
						}

						
						smtpTransport.sendMail(mailOptions, function(error, response){
						    if(error){
						        console.log(error);
						    }else{
						        console.log("Message sent: " + response.message);
						    }	
						});
				});
		}
	}

	return FinanceiroController;
}