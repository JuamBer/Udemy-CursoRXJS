import { fromEvent, interval, auditTime, Observer, tap, map, pluck, catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

const url = "https:/httpbin.org/delay/1";
const obs$ = ajax.getJSON(url, {
    'content-type':'application/json',
    'mi-token': 'ABC234'
});

obs$.subscribe(observer)