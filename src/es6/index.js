// inicializacion por defecto antes de es6
function newFunction(name,age,country){
    var name = name || "juan";
    var age = age || 28
    var country = country || "CO";
    console.log(name,age,country);
}
// inicializacion por defecto en es6
 function newFunction2(name = "juan", age = 28, country = "CO"){
     console.log(name,age,country);
 }

 //llamandola con valores por defecto
 newFunction2();
 //llamando la funcion 2 con argumentos
 newFunction2("Ricardo","23","CO");

 
 let hello = "hello";
 let world = "World";
 //Asi se concatenaba antes
 let epicPhrase = hello + "11" + world;
 console.log(epicPhrase);
//Template literals
 let epicPhrase2 =`${hello} ${world}`;
 console.log(epicPhrase2);

 //multi linea 
let lorem = "Se retrocede con seguridad pero se avanza a tientas uno adelanta manos como un ciego ciego imprudente por añadidura \n" +
 " Siempre que sale, nunca se guarda (no) No tiene panty bajo la falda (yeah)";
let lorem2 = `Una frase epica waooo
otra linea de la frase epica`;

console.log(lorem);
console.log(lorem2);

let person = {
    "name":"Juan Pablo",
    "age":32,
    "country" : "CO"
}

//acceder a elementos de un objeto antes
 console.log(person.name,person.age);
 //ahora con es6
 let {name,age,country} = person;
 console.log(name,age,country);

 //union de arrays 
 let team1 = ["Oscar","Julian","Ricardo"];
 let team2 =["Valeria","Yesica","Camila"];

 let education = ["Davida", ...team1, ...team2];
 console.log(education);

 // Var premite crear variables globales 
 // let solo esta de manera local  su scope sera el bloque en el que se declare
 
 {
     var globalVar = "GLOBAL VAR";

 }
 {
     let globalLet = "Global let ";
 }

 console.log(globalVar);
 //LA linea siguiente deberia generar error 
 console.log(globalLet);

 //Const  apra crear constantes una constante; 

 const a = "b";
 a = "c"; // ya que las constantes no se pueden reasignar esto debe dar error

// Nueva forma de construir objetos 

let name = "Juan Pablo";
let age = 28;
obj = {name:name,age:age}; // Antes 
Obj2 = {name,age}; // Ahora con es6

console.log(Obj2);
//******************************************************
//Funciones de tipo flecha 
//Sintaxis reducida , this no vinculable
//******************************************************
 

// Antes 
const names = [
    { name: "Oscar", age:32},
    { name: "Yesica", age:27}
]

let lisOfNames = names.map( function (item){
    console.log(item.name);
})
//Ahora  con las arroy functions
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 =(name,agem,country =>){
    //algun codigo o accion
}


const listOfNames4 = name => {
    //algun codigo o accion
}

const squeare = num => num *num;

//***************************************
//Promesas
//Soluciona el problema de los callbacks
//***************************************

const helloPromise = () => {
    return new Promise((resolve,reject)=> {
     
        if (true){
            resolve("Hey");
        } else {
            reject ("Ups !!");
        }
    });
}
//Llamando a promesa 

helloPromise()
    .then(response => console.log(response))
    .then (() => console.log("Hola"))
    .catch (error => console.log(error));

//*****************************************
//Clases y objetos 
//*****************************************

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA= valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));
// Se agregó el import y el export para trabajar con modulos 
import  {hello } from "./module";
hello();

//***************************
//Generators
//***************************

function * helloWorld(){
    if (true){
        yield "Hello, ";    
    }
    if (true){
        yield "World";
    }
} ;

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);