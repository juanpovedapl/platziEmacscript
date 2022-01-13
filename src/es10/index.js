//matrices 
let array = [1,2,3,[1,2,3,[5,6,7]]];
console.log(array.flat())

//flatmap
let array =[1,2,3,4,5];
console.log(array.flatMap(value => [value,value*2]));

//trimStart 
//trimEnd
let hello = "        hello world       ";
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

//No es necesario implementar el error como
//argumento del cath en el try catch
try{

} catch{
    error
}

//pasar de arreglo a objeto

let entries = [["name","oscar"],["age",32]];
console.log(Object.fromEntries(entries));

//obejto tipo simbolo

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);