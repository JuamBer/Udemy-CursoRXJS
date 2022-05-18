import { of, from, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

const source$ = from([1,2,3,4,5]);
source$ .subscribe(observer);

const source2$ = of([1, 2, 3, 4, 5]);
source2$.subscribe(observer);


const source3$ = from("Fernando");
source3$.subscribe(observer);



const miGeneador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
const miIterable = miGeneador();

const source4$ = from(miIterable);
source4$.subscribe(observer);