import { Observable } from 'rxjs';

const obs$: Observable<string> = new Observable<string>( subs => {
    subs.next("Hola");
    subs.complete();
    subs.next("Mundo");
});

obs$.subscribe(console.log);
