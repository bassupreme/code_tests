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

function outer() {
    let b = 20;
    function inner() { // questa funzione puó essere acceduta solamente da outer.
       let a = 30
       let b = 30
       let c = 30;
       console.log(a, b, c);
    }
    inner();
}

outer();