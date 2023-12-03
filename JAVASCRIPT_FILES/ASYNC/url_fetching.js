let promise = fetch('https://jsonplaceholder.typicode.com/posts');

let posts = [];

promise
	.then((res, err) =>  res.json())
	.then((res, err) => { 
		res.forEach((item) => {
			posts.push(item);
		})
		console.log(posts);
	});
