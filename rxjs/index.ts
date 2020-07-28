import { of, interval } from 'rxjs';
import { map, filter, take } from "rxjs/operators";

const streamA = of(1, 2, 3, 4);
const streamB = interval(100);

// PIPES

streamA.pipe(
  take(6),
  filter(x => x % 2 !== 0),
  map(val => val * 10)
).subscribe(x => console.log(x));

streamB.pipe(
  take(6),
  filter(x => x % 2 !== 0),
  map(val => val * 10)
).subscribe(x => console.log(x));
