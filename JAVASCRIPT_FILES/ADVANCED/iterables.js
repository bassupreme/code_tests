/*
    ITERABLES = elementi che possono essere iterati
    questi sono: string, arrays, maps, sets.
    Nella documentazione di javascript vi sono le seguenti definizioni

    1. Un oggetto è ITERABLE quando è conforme al protocollo ITERABLE => protocollo ITERABLE? 
    2. Un oggetto è conforme al protocollo ITERABLE quando viene implementato un metodo
        corrispondente alla chiave [Symbol.iterator] (chiave = nome proprietà dell'oggetto).
    3. Quel metodo deve ritornare un oggetto ITERATORE
    4. un oggetto è ITERATORE quando ha un metodo next() che ritorna un oggetto con due proprietà:
        4.1 value = elemento corrente
        4.2. done = valore booleano che dice se ci sono altri elementi che debbano essere visitati
*/


// const arr = [1, 2, 3, 4, 5]

// let sum = 0;
// for(const item of arr) sum+=item;
// console.log(sum);


// IMPLEMENTAZIONE DI UN OGGETTO ITERABLE

const tabellina_2 = {
    [Symbol.iterator] : function() {
        let step = 0 
        const iterator = {
            'next' : function() {
                step++
                if (step <= 10) {
                    return {'value' : 2*step, 'done' : false}
                } 
                return {'value' : undefined, 'done' : true}
            },
        } 
        return iterator
    },
}

for (const item in tabellina_2) {
    console.log(item)
}