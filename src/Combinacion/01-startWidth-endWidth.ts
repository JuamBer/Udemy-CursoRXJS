import { Observer, of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

const numeros$ = of(1,2,3,4).pipe(
    startWith("a","b","c"),
    endWith("x","y","z")
);

numeros$.subscribe(observer)