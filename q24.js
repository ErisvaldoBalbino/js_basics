let array = [8, 3, 15, 7, 22, 1, 10];
let s = 0;
let ma = array[0];
let me = array[0];

for (let i = 0; i < array.length; i++) {
    s += array[i];
    
    if (array[i] > ma) {
        ma = array[i];
    }

    if (array[i] < me) {
        me = array[i];
    }
}


console.log(`Soma: ${s} | Média: ${(s/array.length).toFixed(2)}`);
console.log(`Maior: ${ma} | Menor: ${me}`);
