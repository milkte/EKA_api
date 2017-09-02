var express = require('express');
var router = express.Router();
var Users = require('../models/user');
/* GET users listing. */
router.post('/users', function (req, res, next) {
    Users.forge({
        name: req.body.userName,
        password: req.body.password,
        email: req.body.email,

    }).save()
        .then(function (user) {
            res.json({error: false, data: {id: user.get('id')}})
                .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
                });
        })
});

router.get('/users/:id', function (req, res) {
        Users.forge({id: req.params.id})
            .fetch()
            .then(function (user) {
                if (!user) {
                    res.status(404).json({error: true, data: {}});
                }
                else {
                    res.json({error: false, data: user.toJSON()});
                }
            })
            .catch(function (err) {
                res.status(500).json({error: true, data: {message: err.message}});
            });
    });

module.exports = router;
