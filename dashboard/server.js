var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');



var app = express();
app.use(bodyParser.urlencoded({extended:false}));

mongoose.connect('mongodb://localhost/mongoose_db');

var MongooseSchema = new mongoose.Schema(   {

	name : String,

	age : Number


});

mongoose.model('mongooses', MongooseSchema);
var Mongooses = mongoose.model('mongooses');


app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

var routes = require('./routes/route.js')(app, Mongooses);


app.listen(8000, function(){

	console.log("listening on port 8000");

})








