import { interval, Observer, scan, take, tap } from "rxjs";

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}


const numbers = [1,2,3,4,5];
const totalReducer = (acumulador: number, valorActual: number)=>{
    return acumulador + valorActual;
}
const total = numbers.reduce(totalReducer,0)
console.log(total);

interval(1000).pipe(
    take(6),
    tap(console.log),
    scan(totalReducer)
).subscribe(observer)