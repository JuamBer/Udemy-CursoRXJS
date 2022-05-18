import { interval, timer, Observable, asyncScheduler, Observer } from "rxjs";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.warn("error: ", err),
    complete: () => console.info('complete')
}

const interval$ = interval(1000);
const timer$ = timer(2000);

//console.log("Inicio");
//interval$.subscribe(observer);
//console.log("Fin");

console.log("Inicio");
timer$.subscribe(observer);
console.log("Fin");