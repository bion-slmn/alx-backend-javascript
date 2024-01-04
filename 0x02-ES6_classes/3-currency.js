export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // getter function
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // setter function
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
