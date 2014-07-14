module.exports = function(app){
	
	var autenticar = require('./../middleware/autenticador'),
		user = app.controllers.user;



	app.get('/users', autenticar.loginSistema, user.index);
	app.get('/user/:id/visualizar', autenticar.loginSistema, user.visualizar);
	app.get('/user/:id/editar', autenticar.loginSistema, user.editar);
	app.post('/user/update', autenticar.loginSistema, user.update);



	app.post('/user', user.add);

	app.get('/user/cadastrar', autenticar.loginSistema, user.cadastrar);
}