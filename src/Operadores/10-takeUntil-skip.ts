import { fromEvent, interval, Observable, Observer, skip, takeUntil } from "rxjs";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

const boton = document.createElement("button")
boton.innerHTML = "Detener Timer";
document.querySelector("body").append(boton)

const clickBtn$: Observable<PointerEvent> = fromEvent<PointerEvent>(boton, "click").pipe(
    skip(1),
);
const counter$: Observable<number> = interval(1000).pipe(
    takeUntil(clickBtn$)
);

counter$.subscribe(observer);
clickBtn$.subscribe(observer);