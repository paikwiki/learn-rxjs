import { of } from 'rxjs';
import { take } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5);
const example = source.pipe(take(1));

const subscribe = example.subscribe(v => console.log(v));
