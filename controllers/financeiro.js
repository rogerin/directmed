module.exports = function(app){

	var Referenciado = app.models.referenciado;
	var Financeiro = app.models.financeiro;
	var Resposta = app.models.resposta;
	var nodemailer = require("nodemailer");



	var FinanceiroController = {
		index: function(req,res){
			Financeiro
				.find()
				.populate('referenciado')
				.populate('resposta')
				.exec(function (err, financeiro) {
				  if (err) {
				  	console.log(err);
				  	res.send(err);
				  } else {
				  		console.log(financeiro);
					  res.render('financeiro/listar', { financeiro: financeiro });
				  }
				});
		},
		resposta: function(req,res){
				//console.log('Dados recebido: ');
				//console.log(req.body);
				console.log("TOKEN: "+req.body.token_transaction);
				console.log("TRANSATION: "+req.body.transaction);
				console.log("TRANSATION.order_number: "+req.body.transaction.order_number);


				

				Resposta.findOne({ 'token_transaction': req.body.token_transaction }, function (err, result) {
					if(err) { console.log("ERROR: " + err); }
					else
					{
						if(result) {
							result.token_transaction				= req.body.token_transaction;
							result.transaction.order_number 		= req.body.transaction.order_number;
							result.transaction.free 				= req.body.transaction.free;
							result.transaction.transaction_id 		= req.body.transaction.transaction_id;
							result.transaction.status_name 			= req.body.transaction.status_name;
							result.transaction.status_id 			= req.body.transaction.status_id;
							result.transaction.date_transaction 	= req.body.transaction.date_transaction;
							result.transaction.split				= req.body.transaction.split;
							result.transaction.price_payment 		= req.body.transaction.price_payment;
							result.transaction.date_payment			= req.body.transaction.date_payment;
							result.transaction.seller_token 		= req.body.transaction.seller_token;
							result.transaction.transaction_token	= req.body.transaction.transaction_token;
							result.transaction.token_transaction	= req.body.transaction.token_transaction;
							result.transaction.price_seller 		= req.body.transaction.price_seller;
							result.transaction.price_original 		= req.body.transaction.price_original;
							result.transaction.price_additional 	= req.body.transaction.price_additional;
							result.transaction.price_discount 		= req.body.transaction.price_discount;
							result.transaction.shipping_price 		= req.body.transaction.shipping_price;
							result.transaction.shipping_type 		= req.body.transaction.shipping_type;
							result.transaction.payment_method_id	= req.body.transaction.payment_method_id;
							result.transaction.payment_method_name	= req.body.transaction.payment_method_name;
							
							result.transaction.customer.name 		= req.body.transaction.customer.name;
							result.transaction.customer.cpf 		= req.body.transaction.customer.cpf;
							result.transaction.customer.email 		= req.body.transaction.customer.email;
							result.transaction.customer.token 		= req.body.transaction.customer.token;
							
							result.transaction.customer.address.street 		= req.body.transaction.customer.address.street;
							result.transaction.customer.address.number 		= req.body.transaction.customer.address.number;
							result.transaction.customer.address.neighborhood= req.body.transaction.customer.address.neighborhood;
							result.transaction.customer.address.postal_code = req.body.transaction.customer.address.postal_code;
							result.transaction.customer.address.completion 	= req.body.transaction.customer.address.completion;
							result.transaction.customer.address.city 		= req.body.transaction.customer.address.city;
							result.transaction.customer.address.state 		= req.body.transaction.customer.address.state;
								
							result.transaction.company.name 	= req.body.transaction.company.name;
							result.transaction.company.cpf 		= req.body.transaction.company.cpf;
							result.transaction.company.cnpj 	= req.body.transaction.company.cnpj;
							result.transaction.company.contact 	= req.body.transaction.company.contact;
							result.transaction.company.url 		= req.body.transaction.company.url;
							result.transaction.company.token 	= req.body.transaction.company.token;

							result.transaction.payment.price_payment 			= req.body.transaction.payment.price_payment;
							result.transaction.payment.payment_response			= req.body.transaction.payment.payment_response;
							result.transaction.payment.url_payment 				= req.body.transaction.payment.url_payment;
							result.transaction.payment.date_approval 			= req.body.transaction.payment.date_approval;
							result.transaction.payment.selling_message 			= req.body.transaction.payment.selling_message;
							result.transaction.payment.number_of_voucher_sales 	= req.body.transaction.payment.number_of_voucher_sales;
							result.transaction.payment.split 					= req.body.transaction.payment.split;
							result.transaction.payment.date_payment 			= req.body.transaction.payment.date_payment;
							result.transaction.payment.payment_method_id	 	= req.body.transaction.payment.payment_method_id;
							result.transaction.payment.payment_method_name 		= req.body.transaction.payment.payment_method_name;
							result.transaction.payment.card_id 					= req.body.transaction.payment.card_id;
							result.transaction.payment.number_proccess 			= req.body.transaction.payment.number_proccess;

							  result.save(function (err) {
							        if(err) {
							            console.error('ERROR AO ATUALIZAR: ' + err);
							        } else {
							        	console.log('ATUALIZADO COM SUCESSO!');
							        	Financeiro.findOne({'id_crypto': req.body.transaction.order_number}, function(err, result){
											result.resposta = result._id;
											result.save(function(err){
												if(err) { console.log('ERROR: ' + err) }
												else { console.log('FINANCEIRO ATUALIZADO') }
											});
										});
							        }
							    });

						} else {
							console.log("NOVO REGISTRO!");
							new Resposta({
								token_transaction: req.body.token_transaction,
								transaction: {
									order_number: req.body.transaction.order_number,
									free: req.body.transaction.free,
									transaction_id: req.body.transaction.transaction_id,
									status_name: req.body.transaction.status_name,
									status_id: req.body.transaction.status_id,
									date_transaction: req.body.transaction.date_transaction,
									split: req.body.transaction.split,
									price_payment: req.body.transaction.price_payment,
									date_payment: req.body.transaction.date_payment,
									seller_token: req.body.transaction.seller_token,
									transaction_token: req.body.transaction.transaction_token,
									token_transaction: req.body.transaction.token_transaction,
									price_seller: req.body.transaction.price_seller,
									price_original: req.body.transaction.price_original,
									price_additional: req.body.transaction.price_additional,
									price_discount: req.body.transaction.price_discount,
									shipping_price: req.body.transaction.shipping_price,
									shipping_type: req.body.transaction.shipping_type,
									payment_method_id: req.body.transaction.payment_method_id,
									payment_method_name: req.body.transaction.payment_method_name,
									customer: {
										name: req.body.transaction.customer.name,
										cpf: req.body.transaction.customer.cpf,
										email: req.body.transaction.customer.email,
										token: req.body.transaction.customer.token,
										address:{
											street: req.body.transaction.customer.address.street,
											number: req.body.transaction.customer.address.number,
											neighborhood: req.body.transaction.customer.address.neighborhood,
											postal_code: req.body.transaction.customer.address.postal_code,
											completion: req.body.transaction.customer.address.completion,
											city: req.body.transaction.customer.address.city,
											state: req.body.transaction.customer.address.state
										}
									},
									company: {
										name: req.body.transaction.company.name,
										cpf: req.body.transaction.company.cpf,
										cnpj: req.body.transaction.company.cnpj,
										contact:req.body.transaction.company.contact,
										url: req.body.transaction.company.url,
										token: req.body.transaction.company.token
									},
									payment: {
										price_payment: req.body.transaction.payment.price_payment,
										payment_response: req.body.transaction.payment.payment_response,
										url_payment: req.body.transaction.payment.url_payment,
										date_approval: req.body.transaction.payment.date_approval,
										selling_message: req.body.transaction.payment.selling_message,
										number_of_voucher_sales: req.body.transaction.payment.number_of_voucher_sales,
										split: req.body.transaction.payment.split,
										date_payment: req.body.transaction.payment.date_payment,
										payment_method_id: req.body.transaction.payment.payment_method_id,
										payment_method_name: req.body.transaction.payment.payment_method_name,
										card_id: req.body.transaction.payment.card_id,
										number_proccess: req.body.transaction.payment.number_proccess
									}
								}
							}).
							save(function(err){
								var smtpTransport = nodemailer.createTransport("SMTP",{
							    	service: "Gmail",
								    auth: {
								        user: "geriofilho@gmail.com",
								        pass: "yolandaa"
								    }
								});

								if(err) {
									console.log("ERROR:" + err);

									// setup e-mail data with unicode symbols
									var mailOptions = {
									    from: "Direct MED ✔ <geriofilho@gmail.com>", // sender address
									    to: "geriofilho@gmail.com", // list of receivers
									    subject: "ERRO DirectMed ✔", // Subject line
									    text: "Hello world ✔", // plaintext body
									    html: "<h1> Chegou uma requisicao </h1> "+err+"" // html body

									}


								} else {
									console.log("SUCCESS!!");
									Financeiro.findOne({'id_crypto': req.body.transaction.order_number}, function(err, result){
										result.resposta = resposta._id;
										result.save(function(err){
											if(err) { console.log('ERROR: ' + err) }
											else { console.log('FINANCEIRO ATUALIZADO') }
										});
									});
					
									// setup e-mail data with unicode symbols
									var mailOptions = {
									    from: "Direct MED ✔ <geriofilho@gmail.com>", // sender address
									    to: "geriofilho@gmail.com", // list of receivers
									    subject: "Resposta DirectMed ✔", // Subject line
									    text: "Hello world ✔", // plaintext body
									    html: "<h1> Chegou uma requisicao </h1> <pre>"+JSON.stringify(req.body)+"" // html body
									}
								}

								/*
								smtpTransport.sendMail(mailOptions, function(error, response){
								    if(error){
								        console.log(error);
								    }else{
								        console.log("Message sent: " + response.message);
								    }	
								});
								*/
														
								
						});

						}
					}
				  
				});



				res.send(200);

		}
	}

	return FinanceiroController;
}