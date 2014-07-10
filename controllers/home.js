module.exports = function(app){
	var HomeController = {
		index: function(req,res){
			res.render('index', {
				isAuthenticated: req.isAuthenticated(),
				user: req.user
			});
		}
	}

	return HomeController;
}