/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('project', (table) => {
    table.integer('_id').primary();
    table.string('name').notNullable();
    table.integer('duration').notNullable().defaultTo(0);
    // se 0 desativado se 1 ativado
    table.boolean('status').notNullable().defaultTo(1);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('project');
};
