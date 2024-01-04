import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.curency = currency;
  }

  // getter function for all the parameteres
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // setter fuction
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be a currency object');
    }
    this._currency = value;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.curency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
