async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}

// in questo caso dobbiamo chiamare wait all'interno di 
// f()
// siccome f non è marcata async allora non si può usare await.
	

function f() {
	let x = 0;

	wait()
		.then((res) => {
		x = res
		console.log(x);
	})
		.catch((err) => console.log(err));
}

f()
