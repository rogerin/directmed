module.exports = function(app){
	var mongoose = require('mongoose');

	var Schema = mongoose.Schema;
	var ObjectId = mongoose.Schema.Types.ObjectId;
	
	
	var resposta = new Schema({
		token_transaction: String,
		transaction: {
			order_number: String,
			free: String,
			transaction_id: String,
			status_name: String,
			status_id: Number,
			date_transaction: String,
			split: String,
			price_payment: String,
			date_payment: String,
			seller_token: String,
			transaction_token: String,
			token_transaction: String,
			price_seller: String,
			price_original: String,
			price_additional: String,
			price_discount: String,
			shipping_price: String,
			shipping_type: String,
			payment_method_id: String,
			payment_method_name: String,
			customer:{
				name: String,
				cpf: String,
				email: String,
				token: String,
				address: {
					street: String,
					number: String,
					neighborhood: String,
					postal_code: String,
					completion: String,
					city: String,
					state: String
				}
			},
			company: {
				name: String,
				cpf: String,
				cnpj: String,
				contact:String,
				url: String,
				token: String
			},
			payment: {
				price_payment: String,
				payment_response: String,
				url_payment: String,
				date_approval: String,
				selling_message: String,
				number_of_voucher_sales: String,
				split: String,
				date_payment: String,
				payment_method_id: String,
				payment_method_name: String,
				card_id: String,
				number_proccess: String
			}
		}	
	});
	
	/*
		var resposta = new Schema({
			token_transaction: String
		});
	*/
	return mongoose.model('Resposta', resposta);
}




