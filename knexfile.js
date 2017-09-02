// Update with your config settings.

module.exports = {

  development: {
      client: 'postgresql',
      connection: {
          host: 'ec2-54-221-207-192.compute-1.amazonaws.com',
          user: 'tfwiceyvkmbnqy',
          password: 'e794395f4fb1937f737db1c064a740ccc6f84d81ef8971ad608a4ca6f14b2b55',
          database: 'd53pcbcaggcg',
          charset: 'utf8',
          ssl: true
      },
      pool: {
          min: 2,
          max: 10
      },
      migrations: {
          tableName: 'knex_migrations'
      }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
