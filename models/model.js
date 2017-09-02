/**
 * Created by mupxq on 9/1/17.
 */

var Bookshelf = require('../database');
var model = Bookshelf.Model.extend({
    hasTimestamps: ['created_at', 'updated_at']
}, {
    findAll: function(filter, options) {
        return this.forge().where(filter).fetchAll(options);
    },

    findOne: function(query, options) {
        return this.forge(query).fetch(options);
    },

    create: function(data, options) {
        return this.forge(data).save(null, options);
    }
});