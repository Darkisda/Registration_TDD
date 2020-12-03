import connection from '../../src/database/connection';
import { ProjectRepository } from '../../src/repositories/Project/project.repository';

let projectRepository;

describe('Project Behavior', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
    await connection.seed.run();
    projectRepository = new ProjectRepository();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('Must be returns a Project based in ID', async () => {
    const id = 1;

    return projectRepository.findOne(id).then((data) =>
      expect(data).toEqual({
        _id: 1,
        name: 'Projeto 1',
        duration: 800,
        status: 1,
      })
    );
  });

  it('Must returns a max priority task based in duration and incompleted', async () => {
    const id = 1;

    return projectRepository.priorityTask(id).then((data) =>
      expect(data).toEqual({
        _id: 2,
        name: 'Task 2',
        description: 'Descrição das Task 2',
        duration: 120,
        completed: 0,
        project_id: 1,
      })
    );
  });

  it('Must return none max priority of task based in duration and incompleted', async () => {
    const id = 3;

    return projectRepository
      .priorityTask(id)
      .then((data) => expect(data).toEqual(undefined));
  });

  it('Must return max project priority', async () => {
    const id = 2;

    return projectRepository.priority(id).then((data) => expect(data).toBe(80));
  });

  it('Must return max project priority 2 ', async () => {
    const id = 1;

    return projectRepository
      .priority(id)
      .then((data) => expect(data).toBe(294));
  });

  it('Trying to set desabled a project with all incompleted tasks', async () => {
    const id = 1;

    return projectRepository
      .desable(1)
      .then((data) => expect(data).toBe('Refused'));
  });
});
