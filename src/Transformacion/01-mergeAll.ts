import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);


// Streams
const input$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(textInput, 'keyup');


input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck('target', 'value'),
    map(texto => ajax.getJSON(
        `https://api.github.com/search/users?q=${texto}`
    )),
    mergeAll(),
    pluck('items')
).subscribe(console.log);


