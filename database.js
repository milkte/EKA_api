/**
 * Created by mupxq on 9/1/17.
 */
'use strict';

var knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-54-221-207-192.compute-1.amazonaws.com',
        user: 'tfwiceyvkmbnqy',
        password: 'e794395f4fb1937f737db1c064a740ccc6f84d81ef8971ad608a4ca6f14b2b55',
        database: 'd53pcbcaggcg',
        charset: 'utf8',
        ssl: true
    }
});

knex.schema.createTableIfNotExists('users', function (table) {
    table.increments('id');
    table.string('user_name');
    table.string('user_password');
    table.string('user_email');
    table.timestamps();
})
    .createTableIfNotExists('profile', function(table){
        table.string('first_name');
        table.string('last_name');
        table.string('tel');
        table.string('street_line1');
        table.string('street_line2');
        table.string('city');
        table.string('state');
        table.string('zip');
        table.integer('user_id').unique().references('users.id');
    });


var bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry'); // Resolve circular dependencies with relations

module.exports = bookshelf;