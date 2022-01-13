// Se agrego la  caracteristica  de poder representar numeros
// mayores que 2^53 
// seria big int 

const aBigNumer = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991n);

console.log(aBigNumer);
console.log(anotherBigNumber);

//******* promise all settled()
//**Es una promesa que se resuelve cuando todas las 
//**otras promesas se han resuelto no importa si alguna 
//**  fue rechazada 

// promise all()
// Es una promesa que se rechaza si alguna de 
// las otras promesas es rechazada  

const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));

Promise.allSettled([promise1,promise2,promise3])
   .then(response => console.log(response));

// algo del globathis vs window
// no entendi bien 

console.log(window);
console.log(globalThis);

//Operador de nulo
//si el operando del lado izquierdo es nulo o indefinido
// regresa el valor del lado derecho
// caso contrario regresa el operando del lado izquierdo

const fooo = null ?? "default string";
console.log(fooo);

//Optional chaining o encademaniento opcional 
// el "operador" es ?
// si no se agrega el signo de interrogacion al
//final de user y profile el codigo se rompe
// por que el objeto aun no esta creado
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log("email")
}else {
    console.log("fail");
}