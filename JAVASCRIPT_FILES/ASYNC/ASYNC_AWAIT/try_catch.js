// ricordiamoci che una funzione asincrona ritorna un oggetto Promise
// => ha come stato: { state: ..., result: ...}
// => tutto quello che ritorniamo dalla funzione asincrona viene messo in result
// => anche gli errori vengono messi in result in caso la promise sia in uno stato di errore.

const error_uri = 'https://no-such-url';
const proper_uri = 'https://jsonplaceholder.typicode.com/posts/1';

async function getJsonFromUrl(url) {
		let content = await fetch(url); // in questo caso la fetch da errore perchè l'uri specificato non esiste
		let json = await content.json();
		return json;
		// console.log(`Qualcosa è andato storto: ${err}`)
		// throw err; // questo fa si che la promise ritornata vada 
		// dalla funzione entri dopo nella catch
}

getJsonFromUrl(proper_uri)
	.then(res => console.log(res)) 
	.catch(err => console.log(`Qualcosa è andato storto: ${err}`))

console.log('waiting');
