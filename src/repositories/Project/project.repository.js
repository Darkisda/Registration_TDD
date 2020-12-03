/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import connection from '../../database/connection';
import Project from '../../models/Project';

export class ProjectRepository {
  async findAll() {
    try {
      const projects = await connection('project');

      return projects;
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id) {
    try {
      const trx = await connection.transaction();
      const project = await trx('project').where('project._id', id);

      trx.commit();

      return project[0];
    } catch (error) {
      console.log(error);
    }
  }

  async priorityTask(id) {
    try {
      const trx = await connection.transaction();

      const tasksNotCompleteds = await trx('task')
        .where('task.project_id', id)
        .andWhere('task.completed', 0);

      let mostDuration = 0;

      tasksNotCompleteds.map((taks) =>
        taks.duration >= mostDuration
          ? (mostDuration = taks.duration)
          : mostDuration
      );

      const priority = await trx('task')
        .where('task.project_id', id)
        .andWhere('task.completed', 0)
        .andWhere('task.duration', mostDuration);

      await trx.commit();

      return priority[0];
    } catch (error) {
      console.log(error);
    }
  }

  async priority(id) {
    try {
      const trx = await connection.transaction();

      const tasksCompleteds = await trx('task')
        .where('task.project_id', id)
        .andWhere('task.completed', 1);

      const project = await trx('project').where('_id', id);

      let { duration } = project[0];

      tasksCompleteds.map((task) => (duration -= task.duration));

      const priority = (tasksCompleteds.length * 2 + duration * 4) / 6;

      await trx.commit();

      return Math.trunc(priority);
    } catch (error) {
      console.log(error);
    }
  }

  async desable(id) {
    try {
      const trx = await connection.transaction();

      const tasks = await trx('task').where('task.project_id', id);

      let isabled = false;

      tasks.map((task) =>
        task.completed === 1 ? (isabled = true) : (isabled = false)
      );

      if (isabled === true) {
        await trx('project').update('status', 0).where('_id', id);
        await trx.commit();
        return 'Desabled';
      }
      await trx.commit();
      return 'Refused';
    } catch (error) {
      console.log(error);
    }
  }
}
