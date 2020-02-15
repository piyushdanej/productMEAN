var express = require('express');
require('./connection');
var postRouter = require('./Routes/Postrouter')
var usersRouter = require('./Routes/usersRouter')
// var mn = require('mongoose')



app = express();
var PORT = 3000;

app.listen(PORT);

app.use('/users', usersRouter);
app.use('/post' , postRouter);
app.get('/' , function(req , res , next){
    console.log("Hello WOrld!");
    res.send("HELLO WORLD !")
})
