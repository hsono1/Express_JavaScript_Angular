module.exports = function(app, User){




	app.get('/', function(req, res) {

// This is where we will retrieve the users from the database and include them in the view page we will be rendering.
		
	console.log(req.body);


		User.find({}, function(err, users) {
    
			if(err) {
				console.log('something went wrong');
			} else { // else console.log that we did well and then redirect to the root route
			res.render('index', {people : users} );
			}		

  		})

	});
	// Add User Request 
	app.post('/users', function(req, res) {
	    console.log("POST DATA", req.body);
	    // This is where we would add the user from req.body to the database.
		var user = new User({name: req.body.name, age: req.body.age});
		// Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
		user.save(function(err) {
		// if there is an error console.log that something went wrong!
		if(err) {
		console.log('something went wrong');
		} else { // else console.log that we did well and then redirect to the root route
		console.log('successfully added a user!');
		res.redirect('/');
		}
		});
	});


};