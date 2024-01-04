export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // getter for length
  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // setter for all the paramettrs
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  set students(students) {
    if (!students.every((k) => typeof k === 'string') || !(students instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
