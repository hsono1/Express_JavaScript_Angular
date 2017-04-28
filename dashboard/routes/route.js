module.exports = function(app, mongoose){

	var errors = [];
	app.get('/', function(request, response)
	{

		mongoose.find({}, function(err, result){

			if(err){
				console.log(err);
				response.redirect('/');
			}
			response.render('index', {animals : result, messages : errors});


		});


	})

	app.post('/mongoose', function(request, response)
	{
		mongoose.create(request.body, function(err){
			if(err)
			{
				console.log(err);
				response.redirect('/');
			}
			response.redirect('/');
		});

		
	})


	app.get('/delete/:id', function(request, response)
	{
		_id = id;

		
	})




}