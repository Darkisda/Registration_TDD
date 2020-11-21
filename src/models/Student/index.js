export default class Student {
  constructor() {
    this.notes = [];
  }

  addNotes(note) {
    if (this.notes.length <= 2) {
      this.notes.push(note);
    } else {
      throw new Error('Student must be only three notes');
    }
  }

  average() {
    if (this.notes.length === 0) {
      throw new Error('Student dont have notes');
    } else {
      let average = 0;

      this.notes.map((note, idx) => {
        average += note * (idx + 4);
      });

      // return Math.trunc(average / 15);
      return average / 15;
    }
  }

  clearNotes() {
    return (this.notes = []);
  }
}
