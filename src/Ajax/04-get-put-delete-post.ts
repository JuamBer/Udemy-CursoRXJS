import { fromEvent, interval, auditTime, Observer, tap, map, pluck, catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

const url = "https:/httpbin.org/delay/1";
const post$ = ajax.post(url, {
    id: 1,
    nombre: "Juan"
},{
    "mi-token":"ABC123"
});
const put$ = ajax.put(url, {
    id: 2,
    nombre: "Saez"
}, {
    "mi-token": "ABC123"
});

post$.subscribe(observer)
put$.subscribe(observer)

ajax({
    url: url,
    method: "POST",
    headers: {
        "mi-token": "ABC123"
    },
    body: {
        id: 1,
        nombre: "Juan"
    }
}).subscribe(observer)