function loadJson(url) {
  return fetch(url)
    .then(response => response.json());
}

function showPost(post) {  
	return new Promise((resolve, reject) => {
		console.log(post['id']);
		console.log(post['title']);
		setTimeout(() => resolve('post was found'), 1000);
	})
};


/* ecco due modi di processare una promise UGUALI SEMANTICAMENTE 
	* le risposte
	* l'unica differenza sta nella sintassi usata
	* la prima esplicita l'handler specificandone la firma
	* il secondo specifica l'handler solo per nome 
/*
loadJson('https://jsonplaceholder.typicode.com/posts/1/')
	.then(post => showPost(post));
*/

loadJson('https://jsonplaceholder.typicode.com/posts/1/')
	.then(showPost);

