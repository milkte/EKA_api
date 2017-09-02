/**
 * Created by mupxq on 9/1/17.
 */
// user.js
'use strict';

var Bookshelf = require('../database');


var User = Bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,

});

module.exports = Bookshelf.model('users', User);