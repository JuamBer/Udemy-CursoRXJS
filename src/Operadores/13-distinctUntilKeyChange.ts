import { distinct, distinctUntilChanged, distinctUntilKeyChanged, from, fromEvent, interval, Observable, Observer, of, skip, takeUntil } from "rxjs";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

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
    distinctUntilKeyChanged("nombre")
)
personajes$.subscribe(observer)