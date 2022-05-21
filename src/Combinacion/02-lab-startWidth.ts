import { Observer, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { startWith, endWith } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}

const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';
const body = document.querySelector("body");

ajax.getJSON('https://reqres.in/api/users/2?delay=3').pipe(
    startWith(true),
    endWith(false)
).subscribe(res=>{
    if(res === true ){ 
        body.append(loadingDiv); 
    }else{
        body.querySelector('.loading').remove(); 
    }
})
