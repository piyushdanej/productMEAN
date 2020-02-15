var mongoose = require('mongoose');

// var Schema =new mongoose.Schema

var postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true},
    body : {
        type : String,
        required : true},
    author : {
        type : String,
        required : true},
    date : Date,
    meta : {
        votes : Number,
        details : String
    }
})

module.exports = postSchema;    