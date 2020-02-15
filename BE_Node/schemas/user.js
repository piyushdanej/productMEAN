var mongoose = require('mongoose')
var schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number , 
        required : true
    },
    introLine : String

})

module.exports = userSchema;