module.exports = function(app){
	
	var autenticar = require('./../middleware/autenticador'),
		ref = app.controllers.referenciados; 

	app.get('/referenciados', autenticar.loginSistema, ref.index);
	app.get('/referenciado/cadastrar', autenticar.loginSistema, ref.cadastrar);
	app.post('/referenciado/add', autenticar.loginSistema, ref.add);

}