function converterMoeda(v, t) {
    return (`R$${v.toFixed(2)} = ${t > 5.20 ? '€' : '$'}${(v/t).toFixed(2)}`)
}

let v = 100;
let t = 5.60;

console.log(converterMoeda(v,t))