import { concat, interval, Observer, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { startWith, endWith, take } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

const interval$ = interval(1000); 
concat(
    interval$.pipe(take(2)), 
    interval$.pipe(take(3)),
    of("Hola"),
    [1,2,3]
).subscribe(observer)
