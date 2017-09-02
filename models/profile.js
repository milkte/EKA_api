/**
 * Created by mupxq on 9/1/17.
 */
'use strict';

var Bookshelf = require('../database');

require('./user');
var Profile = Bookshelf.Model.extend({
    tableName: 'profile',
    hasTimestamps: true,

    users: function() {
        return this.belongsTo('users');
    }
});

module.exports = Bookshelf.model('profile', Profile);