const generator = require('creditcard-generator');
const moment = require('moment');

export function randomDate(): string {
  const start = new Date(2027, 0, 1);
  const end = new Date(2028, 0, 1);
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return moment(date).format('MM/YY');
}

export function randomCVV(): number {
  return Math.floor(Math.random() * (999 - 100 + 1) + 100);
}

export function randomCardNumber(): number {
  return parseInt(generator.GenCC()[0]);
}

export function randomId(): number {
  return Math.floor(Math.random() * 100 + 1);
}
