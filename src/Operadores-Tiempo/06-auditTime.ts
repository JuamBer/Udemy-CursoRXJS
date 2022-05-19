import {fromEvent, interval, auditTime, Observer, tap, map } from "rxjs";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(
    map(val => val.x),
    tap(val => console.log("tap ",val)),
    auditTime(2000)
).subscribe(observer)