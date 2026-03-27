let inp = 250;

if (inp <= 100) {
    console.log("Sem desconto");
} else if (inp >= 100.1 && inp <= 300) {
    console.log(`Original: R$${inp.toFixed(2)} | Desconto: 10% (R$${inp * 0.1}) | Final: R$${(inp * (1 - 0.1)).toFixed(2)}`);
} else {
    console.log(`Original: R$${inp.toFixed(2)} | Desconto: 20% (R$${inp * 0.2}) | Final: R$${(inp * (1 - 0.2)).toFixed(2)}`);
}