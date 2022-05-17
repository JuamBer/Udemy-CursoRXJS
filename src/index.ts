import { Observable, Observer } from "rxjs";

const observer: Observer<string> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.warn("error: ", err),
    complete: () => console.info('complete')
}

const intervalo$: Observable<number> = new Observable<number>(susb=>{
    let contador: number = 0;
    setInterval(()=>{
        susb.next(contador);
        contador++;
    },1000)
});
intervalo$.subscribe(console.log)