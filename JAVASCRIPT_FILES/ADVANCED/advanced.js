/*
    ADVANCED STUFF: questo è un file
    che serve per ripassare le c ose difficili
    di javascript:
*/

/*
    NESTED FUNCTIONS: in js è possibili dichiarare e definire
    una funzione all'interno di un'altra funzione.
*/

let a = 10;

// function outer() {
//     let b = 20;
//     function inner() { // questa funzione puó essere acceduta solamente da outer.
//        let a = 30
//        let b = 30
//        let c = 30;
//        console.log(a, b, c);
//     }
//     inner();
// }
// outer();

/* 
   CLOSURE: una closure sembra esere uno stato permanente al quale una
   funzione puó accedere.
   In questo esempio, la funzione outer, crea una variabile counter. 
   Dichiara e definisce poi una funzione inner().
   Ritorna la funzione.
   Invocando la fuznione ritornata, ci si accorge che nell'invocazione successiva alla
   prima, la funzione inner si "ricorda" il valore precedente di counter.
*/

// function outer() {
//     let counter = 0
//     function inner() {
//         counter++
//         console.log(counter)
//     }
//     return inner // in js è possibile ritornare una funzione.
// }

// const f = outer()
// const g = outer()
// f()
// f() 
// g()
// g()
// g()

/*
    FUNCTION CURRYING: praticamente una concatenazione di chiamate di funzinoni;
*/

// function sum(a, b, c) {
//     return a + b + c
// }

// console.log(sum(1, 2, 3))

// function sum(number) {
//     let counter = number 
//     function inner_sum(arg) {
//         counter = counter + arg
//         return inner_sum
//     }
//     return inner_sum
// }

// console.log(sum(1)(2)(3))

/*
    THIS KEYWORD: semantica diversa rispetto ad altri linguaggi di programmazione ad oggetti.
    in generale, la semantica è molto simile a quella di c++, con la differenza che this, messo in un contesto
    qualunque, si riferisce ad un particolare oggetto: l'oggeto globale.  
    
*/

// const persona = {
//     'name' : 'leonardo',
//     'eta'  : 21,
//     greet : function () {
//         console.log(`Hi my name is ${this.name}`);
//     }
// }

// const persona_2 = {
//     'name' : 'anita',
//     'eta'  : 19,
//     greet : function () {
//         console.log(`Hi my name is ${this.name}`);
//     }
// }
// function sayMyName(person) {
//     console.log(`Hi my name is ${this.name}`);
// }

// persona.greet(); // il binding è implicito nell'oggetto 
// persona_2.greet();
// sayMyName.call(persona) // esplicitare il binding

// function Person(name, surname = '') { // concetto di costruttore di oggetti (caso particolare delle fuznioni, che in js sono degli Object)
//     /* 
//         this = {} quetso è quello che js fa dietro le quinte
//         ovvero: un oggetto vuoto viene creato 
//         successivamente, si vanno ad aggiungere dei campi
//         mediante .campo_da_aggiungere
//     */
//     this.name = name
//     this.surname = surname
//     this.greet = function() {
//         console.log(`Hi my name is ${this.name} ${this.surname}`);
//     }
// }

// const p1 = new Person('leonardo', 'basso');
// const p2 = new Person('anita', 'basso');

// p1.greet();
// p2.greet();

/*
    PROTOTYPE: ogni oggetto js ha all'interno di esso la proprietá prototype:
    praticamente questa proprietá é un oggetto js che contiene al suo interno tante altre proprietá
    che gli oggetti di quel tipo avranno.
*/

function Person(name, surname) {
    this.name = name
    this.surname = surname 
}
// instanziare variabili mediante Person (funzione costruttore)
const p1 = new Person('Bruce','Wayne');
const p2 = new Person('Elon','Musk');

// p1.getFullName = function() { // questa funzionalitá è solo agganciata a p1...come farlo per ogni Person
//     return this.name + ' ' + this.surname;
// }

// in questo modo, tutte le variabili instanziate grazie a Person
// hanno la proprietá getFullName
Person.prototype.getFullName = function() { 
    return this.name + ' ' + this.surname;
}

console.log(p1.getFullName());
console.log(p2.getFullName());

// ereditarietá tramite prototipo
function SuperHero(name, surname) {
    Person.call(this, name, surname)
}
SuperHero.prototype = Object.create(Person.prototype); 

const spiderman = new SuperHero('Peter', 'Parker');
console.log(spiderman.getFullName());