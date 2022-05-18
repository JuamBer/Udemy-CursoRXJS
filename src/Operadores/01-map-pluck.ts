import { of, range, from, Observer, Observable, fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

const range$: Observable<string> = range(1,5).pipe(
    map<number, string>(val => (val * 10).toString())
)

range$.subscribe(observer);

const keyup$: Observable<string> = fromEvent<KeyboardEvent>(document, "keyup").pipe(
    map(val => val.code)
);

keyup$.subscribe(observer);

const keyuppluck$: Observable<string> = fromEvent<KeyboardEvent>(document, "keyup").pipe(
    pluck("code")
);
const keyuppluck2$: Observable<unknown> = fromEvent<KeyboardEvent>(document, "keyup").pipe(
    pluck("target","baseURI")
);
keyuppluck$.subscribe(observer);
keyuppluck2$.subscribe(observer);
