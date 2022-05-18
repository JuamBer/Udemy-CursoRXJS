import { Observable, Observer, Subject, Subscription } from "rxjs";

const observer: Observer<number> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.warn("error: ", err),
    complete: () => console.info('complete')
}

const intervalo$: Observable<number> = new Observable<number>(subs => {
    const interval = setInterval(() => {
        subs.next(Math.random());
    }, 1000)

    return () => {
        clearInterval(interval);
        console.log("Intervalo Destruido");
    }
});

const subject$: Subject<number> = new Subject<number>();
const subs1 = intervalo$.subscribe(subject$);

const subs2 = subject$.subscribe(observer);
const subs3 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subs1.unsubscribe();
}, 3500)