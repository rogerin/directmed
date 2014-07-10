module.exports = function(app){
	//var home = app.controllers.home;
	var autenticar = require('./../middleware/autenticador');
	
	app.get('/api/data', autenticar.loginApi, function(req, res){
		res.json([
			{ value: 'foo'},
			{ value: 'bar'},
			{ value: 'baz'},

		]);
	});
}