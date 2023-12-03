// per risolvere il problema del CALLBACK HELL
// l'oggetto di tipo PROMISE con la sua API
// è stato introdotto all'interno di js
// con ES6


/*
	* PROMISE: oggetto che lega un processo che produce un output in un tempo t 
	* ad uno o più dei consumatori che vogliano quell'output.
	* L'idea è quella che un attore (l'esecutore) dice ai consumatori voi avrete un risultato
	* quando il processo è finito, viene comunque inviato un qualcosa ai consumatori 
	* 1. il risultato atteso nel caso in cui la computazione sia andata a buon fine.
	* 2. un errore in caso la computazione non sia andata come previsto.
	* la funzione che si passa al costruttore Promise viene chiamata excecutor
	* come parametri ha due callback: resolve e reject.
	* resolve(value) => funzione invocata con value = risultato della nostra computazione
	* reject(error)  => funzione invocata con error = errore eventuale dato dalla computazione
	* l'excecutor chiama al suo interno: 
	* 1. resolve => in caso sia andato tutto bene...
	* 2. reject  => in caso di errore
	* un oggetto di tipo promise ha come stato interno la coppia chiave valore:
	* { state: result: }
	* i callback resolve e reject cambiano lo stato interno di un oggetto di tipo Promise.
*/

const sum = (a, b) => a + b;

let promise = new Promise(function(resolve, reject) { 
	// dopo due millisecondi  
	const res = sum(2, 2);	
	setTimeout(() => res % 2 === 0 ? resolve(res) : reject("non un numero pari"), 2000);
});

/*
	* 
*/
	
promise.then(
	(result) => console.log(result),
	(error) => console.log(error)
);
