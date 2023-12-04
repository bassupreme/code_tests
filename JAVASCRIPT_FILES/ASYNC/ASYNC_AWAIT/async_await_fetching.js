async function loadJson(url) { 
	let json_value = await fetch(url).then(res => res.json()); 
} 

loadJson('https://jsonplaceholder.typicode.com/posts/1')
	.then(res => console.log(res));
