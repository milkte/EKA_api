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
            first_name: "",
            last_name: "",
            tel: "",
            street_line1:"",
            street_line2: "",
            city:"",
            state: "",
            zip: ""
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

    app.put('/editForm2/:id', function (req, res, next){
        Users.forge({id: req.params.id})
            .fetch({require: true})
            .then(function (user) {
                user.save({
                    user_name: user.get('first_name'),
                    user_password: user.get('last_name'),
                    user_email: user.get('user_email'),
                    first_name: req.body.data.firstName || user.get('first_name'),
                    last_name: req.body.data.lastName || user.get('last_name'),
                    tel: req.body.data.tel || user.get('tel'),
                    street_line1: req.body.data.streetLine1 || user.get('street_line1'),
                    street_line2: req.body.data.streetLine2 || user.get('street_line2'),
                    city: req.body.data.city || user.get('city'),
                    state: req.body.data.state || user.get('state'),
                    zip: req.body.data.zip || user.get('zip')
                })
                    .then(function () {
                        res.json({error: false, data: {message: 'User details updated'}});
                    })
                    .catch(function (err) {
                        res.status(500).json({error: true, data: {message: err.message}});
                    });
            })
            .catch(function (err) {
                res.status(500).json({error: true, data: {message: err.message}});
            });
    });

};