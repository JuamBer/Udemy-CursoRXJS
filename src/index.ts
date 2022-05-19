import {fromEvent, interval, auditTime, Observer, tap, map } from "rxjs";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}


const url = "https://api.github.com/users?per_page=5";
const fetchPromise = fetch(url);

// fetchPromise
//     .then(res => res.json())
//     .then(console.log)
//     .catch(console.log)

const manejaErrores = (res:Response) => {
    if(!res.ok){
        throw new Error(res.statusText)
    }
    return res;
}

fetchPromise
    .then(res => res.json())
    .then(console.log)
    .catch(console.log)