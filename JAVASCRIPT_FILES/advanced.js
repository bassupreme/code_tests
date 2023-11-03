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

function outer() {
    let counter = 0
    function inner() {
        counter++
        console.log(counter)
    }
    return inner // in js è possibile ritornare una funzione.
}

const f = outer()
f()
f() 