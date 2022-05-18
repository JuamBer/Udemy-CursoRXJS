import { Observable, Observer, Subscription } from "rxjs";

const observer: Observer<number> = {
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

    setTimeout(() => {
        susb.complete();
    }, 2500)

    return () => {
        clearInterval(interval);
        console.log("Intervalo Destruido");
    }
});
const intervaloSuscription1: Subscription = intervalo$.subscribe(observer)
const intervaloSuscription2: Subscription = intervalo$.subscribe(observer)
const intervaloSuscription3: Subscription = intervalo$.subscribe(observer)

intervaloSuscription1
    .add(intervaloSuscription2)

setTimeout(()=>{
    intervaloSuscription1.unsubscribe();
    
},3000)