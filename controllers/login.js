module.exports = function(app){

var LoginController = {
	login: function(req,res){
		res.render('login/login');
	},
	logar: function(req,res){
		res.send(200);
	}

}

	return LoginController;
}