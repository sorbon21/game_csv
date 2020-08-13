
exports.up = function(knex) {
    return knex.schema
        .createTable('gamers', function (table) {
            table.increments('id');
            table.string('nick', 255).notNullable();
            table.string('email', 255).notNullable().unique();
            table.bigInteger('created_at').notNullable();
            table.string("status",3);
        });

};

exports.down = function(knex) {
  return knex.schema
      .dropTable("gamers");
};
