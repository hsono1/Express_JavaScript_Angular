
var express = require('express');
var mongoose = require('mongoose');

// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({

  name: String, 
  age: Number

})
mongoose.model("User", UserSchema);
var User = mongoose.model('User');






// Routes
var routes = require('./routes/route.js')(app, User);













// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})