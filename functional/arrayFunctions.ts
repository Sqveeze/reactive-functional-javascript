import { formatCurrency } from "./higherO";

// MAP

const map = ([head, ...tail], f) =>
  typeof head === 'undefined' ?
    [] :
    // @ts-ignore
    [f(head), ...map(tail, f)];

console.log(map([1, 2, 3, 4, 5], x => x ** 2));

// REDUCE

const reduce = ([head, ...tail], f, accumulator) =>
  typeof head === 'undefined' ?
    accumulator :
    // @ts-ignore
    reduce(tail, f, f(accumulator, head));

console.log(reduce([1, 2, 3, 4, 5], (x, y) => x + y, 0));

const square = x => x ** 2;

const sum = (x, y) => x + y;

console.log([1, 2, 3, 4, 5].map(square).reduce(sum, 0));

// Filter

const filter = ([head, ...tail], predicate) =>
  typeof head === 'undefined' ?
    [] :
    predicate(head) ?
      // @ts-ignore
      [head, ...filter(tail, predicate)] :
      // @ts-ignore
      filter(tail, predicate);

console.log(filter([1, 2, 3, 4, 5], x => x % 2 === 1));

// EXERCISE

const formatter = formatCurrency('€', '.');
const currencies = [0, 1209, 10000, 10010];

const formattedCurrencies = currencies.map(formatter);
console.log('formattedCurrencies: ', formattedCurrencies);

const summ = currencies.reduce((a, b) => a + b, 0);
console.log('sum', summ);

const expensiveItems = currencies.filter(v => v >= 10000);
console.log('expensiveItems', expensiveItems);
