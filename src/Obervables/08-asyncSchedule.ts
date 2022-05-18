import { Observable, asyncScheduler, Observer } from "rxjs";

setTimeout(()=>{

},3000)

const saludar = () => console.log("hola mundo");
const saludar2 = (nombre) => console.log(`hola mundo ${nombre}`);

const subs =asyncScheduler.schedule(function(state){
    console.log("state: ",state);
    this.schedule(state+1, 1000)    
}, 3000, 0)

setTimeout(()=>{
    subs.unsubscribe();
},6000)