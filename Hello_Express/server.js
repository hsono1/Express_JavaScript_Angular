var express = require("express");


var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get("/users", function(request, response){

	var users_array = [

		{name:'Michael', email:'michael@dojo.com'},
		{name:'Jay', email: 'jay@dojo.com'},
		{name:'Brendan', email:'brendan@dojo.com'},
		{name:'Andrew', email:'andrew@dojo.com'},





	];

	response.render('users', {users: users_array});


});

app.listen(8000, function(){

	console.log('listening on port 8000');


});