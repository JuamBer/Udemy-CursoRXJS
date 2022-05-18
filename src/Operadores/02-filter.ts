import { of, range, from, Observer, Observable, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

const range$: Observable<number> = range(20,10).pipe(
    filter((val,index) => {
        console.log(index);
        
        return val % 2 === 1;
    })
)

range$.subscribe(observer);

const personajes = [
    {
        tipo: "heroe",
        nombre: "Batman"
    },
    {
        tipo: "heroe",
        nombre: "Robin"
    },
    {
        tipo: "villano",
        nombre: "Joker"
    }
]

const personajes$: Observable<any> = from(personajes).pipe(
    filter(val=> val.tipo === "heroe")
)

personajes$.subscribe(observer);

const keyup$: Observable<any> = fromEvent<KeyboardEvent>(document, "keyup").pipe(
    map(val => val.code),
    filter(val => val === "Enter")
);

keyup$.subscribe(observer);
