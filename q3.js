let s = "42.7";

i = parseFloat(s) + 8;

console.log(`${s} + 8 = ${i} (tipo: ${typeof(i)})`);
console.log(`parseInt("10abc") = ${parseInt("10abc")} (tipo: ${typeof(parseInt("10abc"))})`);
console.log(`Number("10abc") = ${Number("10abc")} (tipo: ${typeof(Number("10abc"))})`);