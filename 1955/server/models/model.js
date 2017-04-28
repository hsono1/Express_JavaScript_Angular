var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NamesSchema = new mongoose.Schema({

	name : String,

});

mongoose.model('Name', NamesSchema);






