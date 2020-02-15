var express = require('express');
var postModel = require('../Models/Post')
var router = express.Router();
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/save',jsonParser, function (req, res, next) {
    console.log(req);
    var post = new postModel({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
        date: new Date(),
        meta: {
            votes: req.body.meta.votes,
            details: req.body.meta.details
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