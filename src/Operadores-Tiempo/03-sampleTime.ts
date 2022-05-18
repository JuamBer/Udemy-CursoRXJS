import {fromEvent, map, Observable, Observer, of,sampleTime } from "rxjs";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

const clicks$ = fromEvent<MouseEvent>(document, "click");
clicks$.pipe(
    sampleTime(2000),
    map(({x,y}) => ({x,y})),
).subscribe(
    observer
)