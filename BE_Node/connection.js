var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})
var connection = mongoose.connection;

connection.on('error' , function(err){
    console.log("Error in connection" , err)
})
connection.once('open' , function(){
    console.log("Connected !");
})
