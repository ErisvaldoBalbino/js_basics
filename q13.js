let inp = 10;
let result = 0;
let p = 0;
let im = 0;

for (let i = 1; i <= inp; i++) {
    result += i

    if (i % 2 == 0) {
        p += 1;
    } else {
        im += 1;
    }
}

console.log(`Soma de 1 a ${inp}: ${result}`);
console.log(`Pares: ${p} | Impares: ${im}`);
