let a = 10;
let b = 20;

console.log(`Antes: a = ${a}, b = ${b}`);

[a, b] = [b, a]

console.log(`Depois: a = ${a}, b = ${b}`);