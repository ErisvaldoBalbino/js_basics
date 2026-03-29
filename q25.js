let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pa = [];
let im = [];

for (let i = 0; i < array.length; i++) {
    array[i] % 2 == 0 ? pa.push(array[i]) : im.push(array[i]);   
}

console.log(`Pares: [${pa}]`);
console.log(`Impares: [${im}]`);
