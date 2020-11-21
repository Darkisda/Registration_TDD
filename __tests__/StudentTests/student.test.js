import Student from '../../src/models/Student';

let student;

beforeEach(() => {
  student = new Student();
});

afterEach(() => {
  student.clearNotes();
});

describe('Initializing student', () => {
  it('Initialized student correct', () => {
    expect(student).toBeInstanceOf(Student);
  });
});

describe('To check if behavior of notes is compatible', () => {
  test('Notes with no erros/exceptions', () => {
    student.addNotes(6);
    student.addNotes(7);
    student.addNotes(8);

    expect(student.notes).toEqual([6, 7, 8]);
  });

  test('Exception in number max of notes', () => {
    student.addNotes(6);
    student.addNotes(7);
    student.addNotes(8);

    expect(() => {
      student.addNotes(9);
    }).toThrowError('Student must be only three notes');
  });

  test('Clean up notes', () => {
    student.addNotes(6);
    student.addNotes(7);
    student.addNotes(8);

    expect(student.clearNotes()).toEqual([]);
  });
});

describe('Calculate students average', () => {
  test('Average is above or equal to 7', () => {
    student.addNotes(7);
    student.addNotes(7);
    student.addNotes(9);

    expect(student.average()).toBeGreaterThanOrEqual(7);
  });

  test('Average is less then 7', () => {
    student.addNotes(3);
    student.addNotes(3);
    student.addNotes(5);

    expect(student.average()).toBeLessThan(7);
  });

  test('When a student dont have notes to calculate average', () => {
    expect(() => {
      student.average();
    }).toThrow('Student dont have notes');
  });
});
