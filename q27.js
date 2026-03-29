let array = [1, 3, 5, 3, 7, 1, 9, 5];
let set = new Set();
let arrayincl = [];

for (let i = 0; i < array.length; i++) {
    set.add(array[i]);
}

for (let i = 0; i < array.length; i++) {
    if (arrayincl.includes(array[i])) {
        continue;
    };

    arrayincl.push(array[i]);
}

console.log(`Original: [${array}]`)
console.log(`Sem duplicatas (Set): [${[...set]}]`)
console.log(`Sem duplicatas (includes): [${arrayincl}]`)