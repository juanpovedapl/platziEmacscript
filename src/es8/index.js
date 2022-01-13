//En es8
//Agregaron async y ewait
//object .entries tambien 


//*********************************/
//Objet.entries
//********************************/
const data = {
    fronted:"oscar",
    backend:"Isabel",
    design:"Ana",
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//*********************************/
//Objet.value
//********************************/
const data = {
    fronted:"oscar",
    backend:"Isabel",
    design:"Ana",
}
const values = Object.values(data);
console.log (values);
confirm.log(values.length);

//************************ */
/******EL PADDING **********/
const string = "Hello";
console.log(string.padStart(8, "hi "));
console.log(string.padEnd(12, "-----"));

//Poner una coma despues del ultimo elemento
// de un objeto permite agreagar o no otro elemento
//al objeto eso se llama Trailing commas

/***
 * const data = {
    fronted:"oscar",
    backend:"Isabel",
    design:"Ana",
}
 */

/*************************************************
 * Async y ewait
 */
const helloWorld =()=> {
    return new Promise((resolve,reject) =>{
        (false)
        ? setTimeout(()=> resolve("Hello World"),3000)
        : reject(new Error("Test error"));
    })
};
const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello);
};
helloAsync();
//************************
//Llamado correcto con control de excepciones
const anotherFuntion = async()=>{
    try {
        const hello = await helloWorld();
        console.log(hello);
    }
    catch (error){
        console.log(error);
    }
};
anotherFuntion();
//Promesas
checkWeather('buenos aires', (error, weather) => {
	if (error) throw error;

	if (weather === 'well') {
		return checkFlights('buenos aires', (err, flights) => {
			if (err) throw err;

			buyTicket(flights[0], (e, ticket) => {
				if (e) throw e;
				console.log('ticket nº %d', ticket.number);
			});
		});
	}

	console.log('el clima es malo');
});