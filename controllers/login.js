module.exports = function(app){

var LoginController = {
	login: function(req,res){

	// req.getConnection(function(err,connection){
	// 	connection.query('SELECT * FROM funcionarios ORDER BY nome ASC',function(err,rows) {
	// 		if(err)
	// 			console.log("Error Selecting : %s ",err );
	// 		//console.log(rows);
	// 		//res.render('login/login',{page_title:"Customers - Node.js",data:rows});
	// 	});

	// });
		res.render('login/login');



		
	},
	logar: function(req,res){
		req.flash('info', 'Usuário logado com sucesso! Bem vindo a Acesso Exclusivo!');
		res.redirect('/');
	},
	logout: function(req,res){
		req.logout();
		req.flash('info', 'Logout com sucesso!');
		res.redirect('/');
	},
	errorLogin: function(req,res){
		req.logout();
		req.flash('info', 'Erro ao fazer login!');
		res.redirect('/');
	}
}
	return LoginController;
}