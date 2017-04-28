var controller = require('./../controllers/control.js')


module.exports = function(app){


	app.get( '/', function(req, res){

		controller.display(req,res);

	});


	app.get(  '/new/:name/' , function(req, res){


		controller.addName(req,res);



	} );

	app.get(  '/remove/:name/' , function(req, res){


		controller.removeName(req, res);



	});



	app.get( '/:name' , function(req, res) {

		controller.displayName(req,res);


	});



}