var mongoose = require('mongoose')
var postSchema = require('../schemas/Post')

var postModel = mongoose.model('post' , postSchema);

module.exports = postModel;
