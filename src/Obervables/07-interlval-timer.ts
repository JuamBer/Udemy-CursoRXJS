import { interval, timer, Observable, asyncScheduler, Observer } from "rxjs";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.warn("error: ", err),
    complete: () => console.info('complete')
}

const interval$ = interval(1000);
const timer$ = timer(2000);
const timer2$ = timer(0);
const timer3$ = timer(2000, 1000);
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const timer4$ = timer(hoyEn5);

//console.log("Inicio");
//interval$.subscribe(observer);
//console.log("Fin");

console.log("Inicio");
timer$.subscribe(observer);
console.log("Fin");

console.log("Inicio");
timer2$.subscribe(observer);
console.log("Fin");

console.log("Inicio");
timer3$.subscribe(observer);
console.log("Fin");

console.log("Inicio");
timer4$.subscribe(res => console.log("HoyEn5: ", res));

console.log("Fin");