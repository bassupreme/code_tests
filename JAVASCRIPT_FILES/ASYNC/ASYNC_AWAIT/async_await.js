/*
	* async await sono keyword che permettono di usare 
	* in un modo un pochino più pulito gli oggetti Promise 
	* async: usata solo prima della dicharazione e definizione di una funzione, 
	* significa che quella funzione ritorna una promise.
	*/


/*
async function f() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(1), 1000);
	})
}

async function g() {
	setTimeout(() => Promise.resolve(1), 1000);
}

f().then((res) => console.log(res));
console.log('waiting...');
*/


let mut = {
	'status': 0
}

async function f(mut) {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve(1), 3000);
	})

	mut = await promise;

	/* 
		* await ha effetto bloccante nel senso che blocca tutto il flusso di esecuzione
		* della funzione che la racchiude 
		* => tutto ciò che viene dopo avviene solo dopoo che la promise viene risolta.
		* per esempio lo statement seguente (**) viene eseguito solamente dopo che
		* la promise viene risolta.
	*/
	console.log(`status: ${mut}`); // (**)
	return mut;
}

f(mut.status).then(res => {
	mut.status = res;
	console.log(res);
});

if (mut.status === 0) { 
	console.log(mut.status);
}

