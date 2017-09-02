/**
 * Created by mupxq on 9/1/17.
 */
// user.js
'use strict';

var Bookshelf = require('../database');

require('./profile');
var User = Bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,

    profile: function() {
        return this.hasOne('profile');
    }
});

module.exports = Bookshelf.model('users', User);