/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('task', (table) => {
    table.increments('_id').primary();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.integer('duration').notNullable();
    table.boolean('completed').defaultTo(false);

    table.integer('project_id').references('project._id').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('task');
};
