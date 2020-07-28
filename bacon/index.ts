import { fromEvent, combineWith } from 'baconjs';

const height$ = fromEvent(document.querySelector('#height'), 'input').map(e => {
  const event = e as Event;
  const target = event.target as HTMLInputElement;
  return parseInt(target.value, 10);
})
  .startWith(170);

const weight$ = fromEvent(document.querySelector('#weight'), 'input').map(e => {
  const event = e as Event;
  const target = event.target as HTMLInputElement;
  return parseInt(target.value, 10);
})
  .startWith(70);

combineWith(height$, weight$, (height: number, weight: number) => {
  const h = height / 100;
  const bmi = weight / (h ** 2);
  return bmi.toFixed(2);
}).onValue(value => document.querySelector('#bmi').innerHTML = value);
