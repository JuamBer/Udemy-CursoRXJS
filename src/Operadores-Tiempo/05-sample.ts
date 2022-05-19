import {fromEvent, interval, map, Observable, Observer, of,sample,sampleTime } from "rxjs";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

const interval$ = interval(500);
const click$ = fromEvent(document, "click");

interval$.pipe(
    sample(click$)
).subscribe(observer)