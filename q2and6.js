function imc (p, a) {
    return p / (a*a);
};

let p = 75;
let a = 1.80;

let calc = imc(p,a).toFixed(2);

console.log(`Peso: ${p}, Altura: ${a.toFixed(2)} 
Seu IMC é: ${calc}`);

if (calc < 18.5) {
    console.log(`IMC ${calc} - Classificação Abaixo do peso`)
} else if (calc >= 18.6 || calc <= 24.9) {
    console.log(`IMC ${calc} - Classificação Normal`)
} else if (calc >= 25 || calc <= 29.9) {
    console.log(`IMC ${calc} - Classificação Sobrepeso`)
} else {
    console.log(`IMC ${calc} - Classificação Obesidade`)
}