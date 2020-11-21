import Classroom from '../../src/models/Classroom';
import Student from '../../src/models/Student';

let classroom;
let studentA;
let studentB;
let studentC;

beforeEach(() => {
  studentA = new Student();
  studentB = new Student();
  studentC = new Student();
  classroom = new Classroom(3);
});

afterAll(() => {
  classroom.clearStudents();
});

describe('Initializing a classroom', () => {
  it('Initialized student correct', () => {
    expect(classroom).toBeInstanceOf(Classroom);
  });
});

describe('To check if behavior of classroom is compatible', () => {
  test('Classroom with no errors/exceptions of maximum number of students', () => {
    expect(classroom.addStudent(studentA)).toBe('Successfully Registered');
    expect(classroom.addStudent(studentB)).toBe('Successfully Registered');
    expect(classroom.addStudent(studentC)).toBe('Successfully Registered');
  });

  test('Exception in classroom in maximum number of students', () => {
    expect(classroom.addStudent(studentA)).toBe('Successfully Registered');
    expect(classroom.addStudent(studentB)).toBe('Successfully Registered');
    expect(classroom.addStudent(studentC)).toBe('Successfully Registered');
    expect(() => {
      classroom.addStudent(new Student());
    }).toThrow('Not enrolled, class without vacancies');
  });

  test('Clean up classroom', () => {
    classroom.addStudent(studentA);
    classroom.addStudent(studentB);
    classroom.addStudent(studentC);

    expect(classroom.clearStudents()).toEqual([]);
  });
});

describe('To show students...', () => {
  test('...are approvededs', () => {
    studentA.addNotes(7);
    studentA.addNotes(8);
    studentA.addNotes(9);

    studentB.addNotes(7);
    studentB.addNotes(7);
    studentB.addNotes(7);

    studentC.addNotes(8);
    studentC.addNotes(9);
    studentC.addNotes(10);

    classroom.addStudent(studentA);
    classroom.addStudent(studentB);
    classroom.addStudent(studentC);

    expect(classroom.approvedStudents()).toEqual([
      studentA,
      studentB,
      studentC,
    ]);
  });

  test('...are disapproved', () => {
    studentA.addNotes(7);
    studentA.addNotes(8);
    studentA.addNotes(9);

    studentB.addNotes(2);
    studentB.addNotes(3);
    studentB.addNotes(1);

    studentC.addNotes(8);
    studentC.addNotes(9);
    studentC.addNotes(10);

    classroom.addStudent(studentA);
    classroom.addStudent(studentB);
    classroom.addStudent(studentC);

    expect(classroom.disapprovedStudents()).toEqual([studentB]);
  });

  test('...percentage are approved', () => {
    studentA.addNotes(7);
    studentA.addNotes(8);
    studentA.addNotes(9);

    studentB.addNotes(2);
    studentB.addNotes(3);
    studentB.addNotes(1);

    studentC.addNotes(2);
    studentC.addNotes(2);
    studentC.addNotes(2);

    classroom.addStudent(studentA);
    classroom.addStudent(studentB);
    classroom.addStudent(studentC);

    expect(classroom.percentageApproved()).toBe(33);
  });

  test('...are approvededs BUT have no one', () => {
    expect(() => {
      classroom.approvedStudents();
    }).toThrow('Impossible to show when no one is in the classroom');
  });

  test('...are disapproved BUT have no one', () => {
    expect(() => {
      classroom.disapprovedStudents();
    }).toThrow('Impossible to show when no one is in the classroom');
  });

  test('...percentage are approved BUT have no one', () => {
    expect(() => {
      classroom.percentageApproved();
    }).toThrow('Impossible to show when no one is in the classroom');
  });
});
