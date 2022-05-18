import { Observer, of, take } from "rxjs";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}


const numeros$ = of(1,2,3,4,5).pipe(
    take(3)
)

numeros$.subscribe(observer)