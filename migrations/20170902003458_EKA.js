
exports.up = function(knex, Promise) {
    const createUser = knex.schema.createTableIfNotExists('users', function (table) {
        table.increments('id');
        table.string('user_name');
        table.string('user_password');
        table.string('user_email');
        table.timestamps();
    });
    const createProfile = knex.schema.createTableIfNotExists('profile', function (table) {
        table.string('first_name');
        table.string('last_name');
        table.string('tel');
        table.string('street_line1');
        table.string('street_line2');
        table.string('city');
        table.string('state');
        table.string('zip');
        table.integer('user_id').unique().references('users.id');
        table.timestamps();
    });

    return Promise.all([createUser, createProfile])
};

exports.down = function(knex, Promise) {
    const dropUser = knex.schema.dropTable('users');
    const dropProfile = knex.schema.dropTable('profile');
    return Promise.all([dropProfile, dropUser]);
};
