import { Observable, Observer, Subscription } from "rxjs";

const observer: Observer<string> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.warn("error: ", err),
    complete: () => console.info('complete')
}

const intervalo$: Observable<number> = new Observable<number>(susb=>{
    let contador: number = 0;
    const interval = setInterval(()=>{
        susb.next(contador);
        contador++;
    },1000);

    return () => {
        clearInterval(interval);
        console.log("Intervalo Destruido");
    }
});
const intervaloSuscription1: Subscription = intervalo$.subscribe(console.log)
const intervaloSuscription2: Subscription = intervalo$.subscribe(console.log)

setTimeout(()=>{
    intervaloSuscription1.unsubscribe();
    intervaloSuscription2.unsubscribe();
},3000)
