import { fromEvent, Observable, Observer, range } from "rxjs";
import { tap,map } from "rxjs/operators";

const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lorem fringilla, pretium sapien nec, pulvinar justo. Nulla pharetra magna dolor, sit amet rhoncus lorem euismod at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Nunc pretium at orci at condimentum. Morbi quam eros, porttitor convallis ex vitae, dictum bibendum diam. Sed orci turpis, vulputate sit amet libero sit amet, volutpat facilisis urna. Vestibulum mollis suscipit neque vel facilisis.
<br/><br/>
In metus nulla, molestie vel felis vitae, scelerisque egestas lorem. Pellentesque pharetra dolor sapien, et mattis urna egestas in. Vestibulum laoreet nisi eu velit iaculis lobortis. In fermentum hendrerit lacus nec vulputate. Cras faucibus vulputate porta. Quisque augue orci, condimentum ac augue dapibus, tincidunt porta magna. Vestibulum eros nisl, feugiat sit amet magna maximus, fringilla dignissim augue. Vestibulum malesuada consequat volutpat. Aenean elementum fringilla laoreet. Suspendisse sollicitudin aliquam molestie. Nunc tempor lacinia facilisis. Maecenas sed hendrerit arcu. Praesent mi dui, placerat a consequat at, convallis vel lectus. Curabitur non consectetur neque, in dictum nisl.
<br/><br/>
Phasellus in lobortis arcu. Nullam eu dui sollicitudin, sagittis orci eget, porttitor massa. Etiam at tempor augue, id cursus leo. Donec id erat dapibus, lobortis arcu sit amet, auctor ipsum. In augue sem, pulvinar ut blandit in, consequat in lacus. Aenean suscipit aliquam risus volutpat vulputate. In pellentesque erat est, vitae vestibulum ligula consectetur eu. Nullam blandit, ipsum ut porttitor ornare, ex eros volutpat mi, at aliquam sapien nisi sed sem. Suspendisse pretium varius erat et sagittis. Proin luctus justo vel augue mattis, vel bibendum neque congue.
<br/><br/>
Aliquam at urna neque. Mauris blandit pharetra vestibulum. Nullam vitae enim mauris. Proin nulla felis, vestibulum ut magna at, viverra auctor justo. Ut sed nisl sem. Nunc condimentum sit amet nisl sit amet vulputate. Proin et mauris mauris.
<br/><br/>
Maecenas a eros vitae sapien venenatis tempor in eget ex. Quisque vitae consequat lectus. Aliquam vel suscipit eros. Nunc imperdiet vehicula consectetur. Curabitur egestas congue fermentum. Aenean fermentum ante at risus posuere dapibus. Donec imperdiet porttitor elementum. Cras aliquet purus ac leo fringilla semper sed dapibus nisi. Suspendisse et velit in orci dapibus laoreet.
`;
const body = document.querySelector("body");
body.append(texto)

const progessBar = document.createElement("div")
progessBar.setAttribute("class", "progress-bar");
body.append(progessBar)

const observer: Observer<any> = {
    next: (res) => console.log("next: ", res),
    error: (err) => console.error("error: ", err),
    complete: () => console.info('complete')
}
const calcularPorcentajeScroll = (event: any): number =>{
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    return (scrollTop/ (scrollHeight - clientHeight))*100;
}

const scroll$: Observable<Event> = fromEvent<Event>(document, "scroll");
const progress$: Observable<number> = scroll$.pipe(
    map(val => calcularPorcentajeScroll(val))
)
progress$.subscribe(res =>{
    progessBar.style.width = `${res}%`;
})