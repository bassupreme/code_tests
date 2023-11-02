// RIPASSO DI JS.
console.log('hello world');

// VARIABILI
let eta = 21;
const usa = 50;

// SCOPE
/*
    lo scope delle variabili in js è a blocchi.
    praticamente funziona esattamente come lo scope in c, c++ e java.
*/

console.log(usa + eta);

// DATA TYPES
/*
    FONDAMENTALE: javascript è un linguaggio debolmente tipato.
    questo implica che nella dichiarazione di una variabile  
    non è necessario specificarne il tipo.
*/

// primitivi 
const PI = 3.14; // number type
const nome = 'leonardo'; // string type
let buono = false; // boolean type
let non_definito // undefined
let nullo = null; // null
console.log(non_definito); 
console.log(nullo);  

// non primitivi
const persona = {
    'nome' : 'leonardo',  // key = stringa sempre
    'cognome' : 'basso',  // value = un qualsiasi tipo => primitivo o derivato (complesso).
}

console.log(persona['nome'] == persona.nome); // == significa che viene fatto il test di uguaglianza solamente sul valore dei due operandi
console.log(persona['nome'] === persona.nome); // === significa che viene fatto il test di uguaglianza sia sul tipo che sul valore dei due operandi

const dispari = [1, 3, 5, 7, 9]; // gli array partono da 0...
let somma = 0;
dispari.forEach((item) => somma += item); // queste sono le lambda function...un concetto già esplorato in c++
console.log(somma);

// OPERATORI 
/*
    in js ci sono gli operatori che ci si aspetta di avere da un qualsiasi linguaggio
    di programmazione...
    1. unari => ++  --  =   .   !
    2. binari => || && == === <= >= + - * / %
        2.1 + funge da operatore di concatenazione tra due variabili di tipo stringa.
    3. operatore ternario => ? :
*/

// CONVERSIONI TRA TIPI
/*
    ci sono due tipi di conversioni:
    1. implicite
    2. esplicite
        2.1. Type(value)
        2.2. altri metodi: toString(), parseInt(), parseFloat() etc..
*/

console.log(String(5)); 
console.log(Number('5'));
console.log('5' + 5);  // in questo caso il numero viene convertito in stringa per la concatenazione
console.log('5' + '5');  // in questo caso il numero viene convertito in stringa per la concatenazione
console.log(5 === '5');

/* STATEMENT
    1. condizionali
    2. iterativi 
    sono praticamente uguali ad ogni altro linguaggio.
*/

// FUNZIONI
/*
    1. ci sono molti modi per dichiarare e definire delle funzioni, dipende dal numero di parametri.
    2. le funzioni se non sbaglio sono un tipo.
    3. siccome js è debolmente tipizzato, non serve dichiarare un tipo di ritorno. 
*/

// dichiarazione
function bitch() {
    console.log('sup bitch');
}

// invocazione
bitch();

// funzioni parametriche
/*
function fattoriale(numero) {
    if (numero == 1) return numero 
    return numero * fattoriale(--numero);
}
*/

// arrow functions
const fattoriale = (numero) => {
    if (numero == 1) return numero 
    return numero * fattoriale(--numero);
}

// caso particolare: 1 solo statement => parentesi graffe e return statement non necessarie
const sum = (a, b) => a + b
console.log(fattoriale(5));
console.log(sum(1, 2));