import { fromEvent, interval, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll, mergeMap, switchMap } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

// Streams
const click$: Observable<Event> = fromEvent<Event>(document, 'click');
const interval$ = interval(1000);

//click$.pipe(
//    mergeMap(()=>interval$)
//).subscribe(console.log)

click$.pipe(
    switchMap(()=>interval$)
).subscribe(console.log)