/*
    CLASS KEYWORD: la class keyword è stata introdotta
    in js solamente come abbellimento sintattico;
    come viene implementato il concetto di ereditarietà è 
    comunque l'uso dell'oggetto prototipo.
    Praticamente...valgono i concetti che si sono imparati durante
    il corso di OOP con Ranzato, tuttavia il come implementata
    l'ereditarietà è sostanzialmente diverso da c++ o java.
*/

class Person {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    };

    greet() {
        console.log(`Ciao mi chiamo ${this.nome} ${this.cognome}`)
    }
}

class Uomo extends Person {
    constructor(nome, cognome, centimetri) {
        super(nome, cognome);
        this.centimetri = centimetri;
    }
    pisello() {
        console.log(`Ciao: ho il pisello lungo ${this.centimetri} centimetri`)
    }
}


const p1 = new Uomo('leonardo', 'basso', 20)
p1.pisello()
