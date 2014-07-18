module.exports = function(app){
	var mongoose = require('mongoose');

	var Schema = mongoose.Schema;
	var ObjectId = mongoose.Schema.Types.ObjectId;

	var assinatura = new Schema({
		user: { type: ObjectId, ref: 'User' },
		billing_contract: {
			id: String, 
			name:String, 
			customer_name:String, 
			customer_email:String, 
			seller_token:String, 
			day_expiration:String, 
			status_id:String, 
			status_name:String, 

			source_register:String, 
			billing_contract_token:String, 
			billing_contract_plans: { 
				billing_contract_plan: { 
					id:String, 
					code: String, 
					description: String, 
					periodicity: String, 
					quantity: String, 
					price_setup: String, 
					price_discount: String, 
					price_due: String
				}
			}
		},
		created_at: {type: Date, default: Date.now}
	});

	return mongoose.model('Assinatura', assinatura);
}

 