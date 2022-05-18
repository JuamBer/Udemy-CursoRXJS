import { distinct, distinctUntilChanged, from, fromEvent, interval, Observable, Observer, of, skip, takeUntil } from "rxjs";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}
const numeros$ = of(1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 3, 1).pipe(distinctUntilChanged())
numeros$.subscribe(observer)

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre:"megaman"
    },
    {
        nombre: "zero"
    },
    {
        nombre: "X"
    },
    {
        nombre: "megaman"
    },
    {
        nombre: "x"
    },
    {
        nombre: "zero"
    },
    {
        nombre: "zero"
    }
]

const personajes$ = from(personajes).pipe(
    distinctUntilChanged((ant, act)=> ant.nombre === act.nombre)
)
personajes$.subscribe(observer)