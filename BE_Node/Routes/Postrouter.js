var express = require('express');
var postModel = require('../Models/Post')
var router = express.Router();

router.get('/save', function (req, res, next) {
    var post = new postModel({
        title: "My Second POst",
        body: "this is my second post",
        author: "Piyush Danej",
        date: new Date(),
        meta: {
            votes: 0,
            details: "none"
        }
    });
    post.save().then(result => res.send("Post Saved"))
        .catch(err => res.status(500).send(err));

})

router.get('/', function (req, res, next) {

    postModel.find({})
        .then(
            data => {
                res.send(data)
            })
        .catch(err => {
            res.status(500).send(err)
        });

})

module.exports = router;