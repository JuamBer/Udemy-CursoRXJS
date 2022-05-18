import { debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, from, fromEvent, interval, Observable, Observer, of, pluck, skip, takeUntil } from "rxjs";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

const clicks$ = fromEvent(document, "click");
clicks$.pipe(
    debounceTime(3000)
).subscribe(
    observer
)

const input = document.createElement("input");
document.querySelector("body").append(input)

const input$ = fromEvent(input, "keyup");
input$.pipe(
    pluck("target","value"),
    debounceTime(1000),
    distinctUntilChanged()
).subscribe(observer)