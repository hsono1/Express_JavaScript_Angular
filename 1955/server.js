var express  = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, ".client/static")));



var mongodb = require('./server/config/mongoose.js');

var routes = require('./server/config/routes.js');

routes(app);












app.listen(8000, function(){

	console.log("Listening on port 8000")

});


