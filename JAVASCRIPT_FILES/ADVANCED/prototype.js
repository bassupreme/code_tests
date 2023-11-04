/*
    PROTOTYPE: un oggetto (inteso come oggeto in js) 
    comune a tutti i tipi di oggetti che si possono definire
    in js
    tutte gli oggetti del tipo che andiamo a definire
    possono utilizzare le proprietà definite nel prototype.
    questo permette di implementare il concetto di ereditarietà.
    si chiama ereditarietà prototipale.
*/

function Person(nome, cognome) { 
    this.nome = nome; 
    this.cognome = cognome; 
}

Person.prototype.greet = function() {
    console.log(`Ciao mi chiamo ${this.nome} ${this.cognome}`);
}

const p1 = new Person('leonardo', 'basso');
const p2 = new Person('anita', 'basso');

p1.greet();

function Uomo(nome, cognome, centimetri) {
    Person.call(this, nome, cognome);
    this.centimetri = centimetri;
}
Uomo.prototype = Object.create(Person.prototype); // il prototipo di persona viene copiato all'inerno di quello di Uomo.
Uomo.prototype.pisello = function() {
    console.log(`C'ho il piselo lungo ${this.centimetri} centimetri`)
}
const leo = new Uomo('leonardo', 'basso', 20);
leo.pisello();