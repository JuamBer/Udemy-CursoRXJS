import { Observable, Observer, range } from "rxjs";
import { tap,map } from "rxjs/operators";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

const numeros$: Observable<number> = range(1,5);
numeros$.pipe(
    tap(val => console.log("antes", val)),
    map(val => val*10),
    tap({
        next: (res) => console.log("next: ", res),
        error: (err) => console.error("error: ", err),
        complete: () => console.info('complete')
    }),
)
numeros$.subscribe(console.log);