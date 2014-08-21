module.exports = function(app){
	var mongoose = require('mongoose');
	var	passportLocalMongoose = require('passport-local-mongoose');

	var Schema = mongoose.Schema;

	var login = new Schema({
		email: String,
		password: String,
		created_at: {type: Date, default: Date.now}
	});

	login.plugin(passportLocalMongoose);

	return mongoose.model('Login', login);
}

