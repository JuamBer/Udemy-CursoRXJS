import { fromEvent, interval, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll, mergeMap, switchMap, take, concatMap } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

const click$: Observable<Event> = fromEvent<Event>(document, 'click');
const interval$ = interval(500).pipe(take(3));

//click$.pipe(
//    switchMap(()=>interval$)
//).subscribe(console.log)

click$.pipe(
    concatMap(()=>interval$)
).subscribe(console.log)