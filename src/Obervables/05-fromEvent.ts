import { fromEvent, Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.warn("error: ", err),
    complete: () => console.info('complete')
}

const src1$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');
const src2$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup');

src1$.subscribe(evento => { console.log(evento.x); console.log(evento.y); });
src2$.subscribe(evento=>{console.log(evento.key);});