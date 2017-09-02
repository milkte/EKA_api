var express = require('express');
var router = express.Router();
var Users = require('../models/user');
/* GET users listing. */

module.exports = function (app) {

    app.post('/createNewUser', function (req, res, next) {
        Users.forge({
            user_name: req.body.data.userName,
            user_password: req.body.data.password,
            user_email: req.body.data.email,

        }).save()
            .then(function (user) {
                res.json({error: false, data: {id: user.get('id')}});

            }).catch(function (err) {
            res.status(500).json({error: true, data: {message: err.message}});
        });
    });

    app.get('/users/:id', function (req, res) {
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

    app.post('/editForm2/:id', function (req, res, next){
        Users.forge(
            {id: req.params.id,




        })
    })
};