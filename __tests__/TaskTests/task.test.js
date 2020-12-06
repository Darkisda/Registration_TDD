import connection from '../../src/database/connection';
import { TaskRepository } from '../../src/repositories/Task/task.repository';
// import { ProjectRepository } from '../../src/repositories/Project/project.repository';

let taskrepo;

describe('Tasks behavior', () => {
  beforeEach(() => {
    taskrepo = new TaskRepository();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('Must be recused because project does not accept more task if have over 800 duration', async () => {
    const name = 'Task recused';
    const description = 'Another description of task recused';
    const duration = 60;
    const completed = false;
    const projectId = 2;

    return taskrepo
      .createTask(name, description, duration, completed, projectId)
      .then((data) => expect(data).toBe('Refused'));
  });
});
