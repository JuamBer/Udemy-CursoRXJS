import { from, fromEvent, interval, Observable, Observer, of, take } from 'rxjs';
import { debounceTime, map, pluck, mergeAll, mergeMap, takeUntil, tap } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResp } from '../interfaces/github-users.interface';

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

// Referencias
const letras$ = of('a','b','c').pipe(
    mergeMap((val)=> interval(1000).pipe(
            map(i => val+1),
            take(3)
        )
    )
);

letras$.subscribe(observer);

const mouseDown$ = fromEvent(document, "mousedown");
const mouseUp$ = fromEvent(document, "mouseup");
const interval$ = interval(1);

mouseDown$.pipe(
    tap((val)=>{console.log(val)}),
    mergeMap((val)=> {
        console.log(val);
        
        return interval$.pipe(
            takeUntil(mouseUp$)
        )
    })
).subscribe(observer)