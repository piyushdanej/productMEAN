var express = require('express');
var postModel = require('../Models/Post')
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var upvotePost = require('../DBOperations/upvoteOp');
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/save', jsonParser, function (req, res, next) {
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

router.get('/getbyuser/:name', function (req, res, next) {
    postModel.find({ "author": req.params.name })
        .then(results => {
            res.send(results);
        })
        .catch(err => res.send(err));
})

router.get('/alltrim/:trimLength', urlencodedParser, function (req, res, next) {
    postModel.find({})
        .then(results => {
            let modifiedResults = results.map(record => {
                record.body = record.body ? record.body.slice(0, req.params.trimLength) : undefined
                return record;
            })
            res.status(200).send(modifiedResults)
        }).catch(err => {
            res.status(500).send(err);
        })
})


router.post('/upvote/:id', function (req, res, next) {
    upvotePost(postModel , req.params.id)
                .then(result => res.status(200).send(result))
                .catch(err => res.status(500).send(err));
})

module.exports = router;