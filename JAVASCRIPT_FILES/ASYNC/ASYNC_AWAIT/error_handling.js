const error_uri = 'http://no-such-url'
const uri = 'https://jsonplaceholder.typicode.com/posts/1'

async function getJson(url) {
	let content = await fetch(url)
	let json = await content.json();	
	return json;
}

getJson(uri)
	.then(res => console.log(res))
	.catch(err => console.log(`si è verificato un errore ${err}`))
