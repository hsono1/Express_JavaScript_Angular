var mongoose = require('mongoose');
var Name = mongoose.model('Name');



module.exports = {


	display : function(req,res){

		Name.find({}, function(err, result){

			if(err)
			{
				res.json(err);
			}
			else
			{
				res.json(result);
			}



		});



	},


	addName : function(req, res){

		var name1 = req.params.name;
		var newName = new Name( {name : name1} );
		newName.save( function(err){
			if(err){
				console.log(err);
			}
			else
			{
				res.redirect('/');
			}


		})







	},



	removeName : function(req, res){

		var name1 = req.params.name;
		Name.remove( { name : name1 }, function(err){
			if(err)
			{
				console.log(err);
			}
			else
			{
				res.redirect('/');
			}


		});





	},


	displayName : function(req, res){

		var name1 = req.params.name;
		Name.findOne({ name: name1}, function(err, result){

			if(err)
			{
				res.json(err);
			}
			else
			{
				res.json(result);
			}



		});





	},









}
