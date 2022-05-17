import { Observable, Observer } from "rxjs";

const observer: Observer<string> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}