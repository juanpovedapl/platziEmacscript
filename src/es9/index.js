//******
//Operador de reposo
//extrae las propiedades de un objeto que no se ha creado
const obj = {
    name:"juanpablo",
    age: 32,
    country: "CO"
};
// Uniendo dos objetos con el 
//operador ...
let {name, ...all}= obj;
console.log(name, all);

const obj = {
    name : "Oscar",
    age :32,
};
const obj1 = {
    ...obj,
    country: "CO",  
};

console.log(obj1);

//Promise.finally
// *****************************************

const helloWorld = ()=>{
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout (() => resolve("Hello World"), 3000)
        : reject (new Error("Test error"))
    });
}

helloWorld()
    .then (response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=> console.log("Finalizo"))
//********************************* */
// Que son regex ?
const regexData =