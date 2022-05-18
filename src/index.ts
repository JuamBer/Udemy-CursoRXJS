import { Observable, Observer, Subject, Subscription, of } from "rxjs";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.warn("error: ", err),
    complete: () => console.info('complete')
}

//const obs$ = of(1,2,3,4,5,6,7);
const obs$ = of([1,2], {a:1,b:2}, function(){}, Promise.resolve(true));

console.log("Inicio Obs");
obs$.subscribe(observer);
console.log("Fin Obs");