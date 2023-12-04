// i valori primitivi in js sono passati per valore e non per riferimento....

/*
let a = 10;

const change = (value) => { reference = reference + 2 }
change(a);

console.log(a);
*/

/*
let b = 10;

const change = (value) => {  return value * 2 }
b = change(b);

console.log(b);
*/

// gli oggetti in js sono invece passati per riferimento
let obj = {
	'name' : 'leo',
	'eta': 21,
}

const change = (obj) => {  obj.eta = 27 }
change(obj)
console.log(obj.eta);
