module.exports = function(app){
	var mongoose = require('mongoose');

	var Schema = mongoose.Schema;
	var ObjectId = mongoose.Schema.Types.ObjectId;
	
	/*
	var resposta = new Schema({
		response: {
			message_response: {
				message: String
			},
			data_response: {
				transaction: {
					order_number: Number,
					free: String,
					transaction_id: Number,
					status_name: String,
					status_id: Number,
					token_transaciton: String,
					payment: {
						price_payment: String,
						payment_response: String,
						url_payment: String,
						tid: String,
						split: Number,
						payment_method_id: Number,
						payment_method_name: String,
						linha_digitavel: Boolean,
					},
					customer: {
						name: String,
						cpf: String,
						email: String,
						addresses: [
							{
								address: String,
								number: String,
								neighborhood: String,
								postal_code: String, 
								completion: String,
								city: String,
								state: String
							}
						],
						contact: [
							{
								contact: {
									value: String,
									type_contact: String
								}
							}
						]
					}
				}
			}
		}
	});
	*/

	var resposta = new Schema({
		token_transaction: String
	});

	return mongoose.model('Resposta', resposta);
}