var express = require('express');
var router = express.Router();
var userModel = require('../Models/user')
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()

router.get('/', function(req, res, next) {
    userModel.find({})
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send(err);
        })
})

router.post('/save', jsonParser, function (req, res, next) {
    var freshUser = new userModel({
                        name: req.body.name,
                        age: req.body.age,
                        introLine: req.body.introLine
                    })

    freshUser.save().then(data => res.send("User Saved"))
                    .catch(err => res.send("Error occured" , err))
})


module.exports = router;