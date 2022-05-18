import { of, range, Observable, asyncScheduler } from "rxjs";

console.log("Inicio");
const src1$: Observable<unknown> = of(1, 2, 3, 4, 5);
src1$.subscribe(console.log);
console.log("Fin");

console.log("Inicio");
const src2$: Observable<unknown> = range(1, 5);
src2$.subscribe(console.log);
console.log("Fin");

console.log("Inicio");
const src3$: Observable<unknown> = range(-5, 10);
src3$.subscribe(console.log);
console.log("Fin");

console.log("Inicio");
const src4$: Observable<unknown> = range(-5, 10, asyncScheduler);
src4$.subscribe(console.log);
console.log("Fin");