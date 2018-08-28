import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const fruits = ["Apple", "Banana", "Cherry"];
const interval$ = interval(1000);
const example = interval$.pipe(take(fruits.length));

const subscribe = example.subscribe(v => {
  const fruit = fruits[v];
  console.log(fruit);
});
