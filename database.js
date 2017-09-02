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

var bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry'); // Resolve circular dependencies with relations

module.exports = bookshelf;