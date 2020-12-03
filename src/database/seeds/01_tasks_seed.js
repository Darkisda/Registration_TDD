/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex('task')
    .del()
    .then(() => {
      return knex('task').insert([
        {
          name: 'Task 1',
          description: 'Descrição das Task 1',
          completed: true,
          duration: 60,
          project_id: 1,
        },
        {
          name: 'Task 2',
          description: 'Descrição das Task 2',
          completed: false,
          duration: 120,
          project_id: 1,
        },
        {
          name: 'Task 3',
          description: 'Descrição das Task 3',
          completed: true,
          duration: 300,
          project_id: 1,
        },
        {
          name: 'Task 4',
          description: 'Descrição das Task 4',
          completed: false,
          duration: 10,
          project_id: 1,
        },
        {
          name: 'Task 5',
          description: 'Descrição das Task 5',
          completed: false,
          duration: 100,
          project_id: 1,
        },
        {
          name: 'Task 6',
          description: 'Descrição das Task 6',
          completed: false,
          duration: 50,
          project_id: 1,
        },
        {
          name: 'Task 7',
          description: 'Descrição das Task 7 Do projeto 2',
          completed: false,
          duration: 120,
          project_id: 2,
        },
        {
          name: 'Task 8',
          description: 'Descrição das Task 8 Do projeto 2',
          completed: true,
          duration: 300,
          project_id: 2,
        },
        {
          name: 'Task 9',
          description: 'Descrição das Task 8 Do projeto 2',
          completed: true,
          duration: 300,
          project_id: 3,
        },
      ]);
    });
};
