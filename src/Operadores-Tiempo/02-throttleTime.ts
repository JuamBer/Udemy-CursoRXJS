import { asyncScheduler, debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, from, fromEvent, interval, Observable, Observer, of, pluck, skip, takeUntil, throttleTime } from "rxjs";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

const clicks$ = fromEvent(document, "click");
clicks$.pipe(
    throttleTime(3000)
).subscribe(
    observer
)

const input = document.createElement("input");
document.querySelector("body").append(input)

const input$ = fromEvent(input, "keyup");
input$.pipe(
    pluck("target","value"),
    throttleTime(1000, asyncScheduler,{
        leading:true,
        trailing:true
    }),
    distinctUntilChanged()
).subscribe(observer)