/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex('project')
    .del()
    .then(() => {
      return knex('project').insert([
        {
          _id: 1,
          name: 'Projeto 1',
          duration: 800,
          status: 1,
        },
        {
          _id: 2,
          name: 'Projeto 2',
          duration: 420,
          status: 1,
        },
        {
          _id: 3,
          name: 'Projeto 3',
          duration: 0,
          status: 1,
        },
      ]);
    });
};
