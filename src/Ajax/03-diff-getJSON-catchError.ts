import { fromEvent, interval, auditTime, Observer, tap, map, pluck, catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

const url = "https:/httpbin.org/delay/1";
const getJSON$ = ajax.getJSON(url);
const ajax$ = ajax(url);


getJSON$.pipe(
    catchError((err: AjaxError) => {
        return of({})
    })
).subscribe(observer)
ajax$.pipe(
    catchError((err: AjaxError)=>{
        return of({})
    })
).subscribe(observer)