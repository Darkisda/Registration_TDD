export default class Classroom {
  constructor(classSize = 5) {
    this.students = [];
    this.numberStudents = classSize;
  }

  addStudent(student) {
    if (this.students.length <= this.numberStudents - 1) {
      this.students.push(student);
      return 'Successfully Registered';
    }
    throw new Error('Not enrolled, class without vacancies');
  }

  approvedStudents() {
    if (this.students.length === 0) {
      throw new Error('Impossible to show when no one is in the classroom');
    } else {
      const approveds = [];

      this.students.map((student) => {
        if (student.average() >= 7) {
          approveds.push(student);
        }
      });

      return approveds;
    }
  }

  disapprovedStudents() {
    if (this.students.length === 0) {
      throw new Error('Impossible to show when no one is in the classroom');
    } else {
      const disapproveds = [];

      this.students.map((student) => {
        if (student.average() < 7) {
          disapproveds.push(student);
        }
      });

      return disapproveds;
    }
  }

  percentageApproved() {
    if (this.students.length === 0) {
      throw new Error('Impossible to show when no one is in the classroom');
    } else {
      let percentage = 0;
      const approveds = this.approvedStudents().length;

      percentage = approveds / this.students.length;

      // console.debug('qtd de alunos', this.students.length);
      // console.debug('Porcentagem de parovados', Math.trunc(percentage * 100));
      return Math.trunc(percentage * 100);
    }
  }

  clearStudents() {
    return (this.students = []);
  }
}
