var mongoose = require('mongoose');

// var Schema =new mongoose.Schema

var postSchema = new mongoose.Schema({
    title : String,
    body : String,
    author : String,
    date : Date,
    meta : {
        votes : Number,
        details : String
    }
})

module.exports = postSchema;    