const loggin = (str) => console.log(`hello ${str}`);

// PRE: la funzione accetta un parametro il cui 
// tipo è una funzione
// DEFINIZIONE: ogni funzione che accetti o ritorni
// una funzione viene definita HIGHER ORDER FUNCTION

// CALLBACK SINCRONO
function hof(callback, name) { 
	callback(name)  // questo è un callback sincrono
}

hof(loggin, 'leonardo');

// CALLBACK A-SINCRONO
// in questo caso la funzione loggin viene eseguita
// dopo un intervallo temporale specificato come secondo
// parametro della funzione setTimeout
setTimeout(loggin, 2000, 'padrone');

// PROBLEMA DEI CALLBACK: callback hell.
