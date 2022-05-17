import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

const obs$: Observable<string> = new Observable<string>(subs => {
    subs.next("Hola");
    //const a = undefined;
    //a.nombre = "Fernando";
    subs.complete();
    subs.next("Mundo");
});
obs$.subscribe(observer);

