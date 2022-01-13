//replaceAll() vs replace()

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";

const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const repalcedString2 = string.replaceAll("JavaScript", "Python");
console.log(repalcedString2);

// Prefijo para metodo privado
// el rpefijo es #
class Message {
    show(val){
        console.log(val);
    };
}
const message = new Message();
message.show('Hola');

// si agregamos el
// # el llamado a show falla pues ahora es un metodo privado
class Message {
    #show(val){
        console.log(val);
    };
}
const message = new Message();
message.show('Hola');

// se agregaron los getter y seetters

class Message {
    #show(val){
        console.log(val);
    };
    get #add(val){

    }
}
const message = new Message();
message.show('Hola');

//promise any
// captura la logica de la primera promesa que se resuelva

const promise1 = new Promise((resolve,reject)=> reject("1"));
const promise2 = new Promise((resolve,reject)=> reject("2"));
const promise3 = new Promise((resolve,reject)=> resolve("3"));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response));

//weakref refrencia debil
// evita que l garbageCollector recoja la referencia 

class anyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
    { ... }
}

//Se agregaron operadores de 
//Asignación AND lógico
//Asignación OR lógico
//Asignación de anulación lógica

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);
