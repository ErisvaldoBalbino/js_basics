const verificarIdade = (n, i) => (`${n} tem ${i} anos e é ${i >= 18 ? "maior de idade" : "menor de idade"}`);

console.log(verificarIdade("Ana", 22))
console.log(verificarIdade("Pedro", 15))