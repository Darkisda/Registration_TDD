/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import connection from '../../database/connection';
import Task from '../../models/Task';
import { ProjectRepository } from '../Project/project.repository';

export class TaskRepository {
  constructor() {
    this.projectRepository = new ProjectRepository();
  }

  async findAll() {
    try {
      const tasks = await connection('task');
      return tasks;
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id) {
    try {
      const tasks = await connection('task');

      const finded = await tasks.find((task) => task._id === id);

      return finded;
    } catch (error) {
      console.log(error);
    }
  }

  async createTask(name, description, duration, completed, projectId) {
    try {
      const project = await this.projectRepository.findOne(projectId);

      if (!project) {
        return 'Project doesnt exist';
      }

      if (project.duration < 800) {
        const trx = await connection.transaction();
        const task = new Task();

        task.name = name;
        task.description = description;
        task.duration = duration;
        task.completed = completed;
        task.projectId = projectId;

        await trx('taks').insert(task);

        await trx.commit();

        return 'Confirmed';
      }
      return 'Refused';
    } catch (error) {
      console.log(error);
    }
  }

  async updateTask(task) {
    const { id, name, description, duration, completed, projectId } = task;

    try {
      const trx = await connection.transaction();

      await trx('task')
        .update({ name, description, duration, completed, projectId })
        .where('task._id', id);

      await trx.commit();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteId(id) {
    try {
      await connection('task').where('task._id', id).del();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAll() {
    try {
      await connection('task').del();
    } catch (error) {
      console.log(error);
    }
  }
}
