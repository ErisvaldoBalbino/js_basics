let inp = -7;

if (inp % 2 == 0) {
    console.log(`${inp} é par ${Math.sign(inp) -1 ? "e negativo" : "e positivo" }`);
} else {
    console.log(`${inp} é impar ${Math.sign(inp) -1 ? "e negativo" : "e positivo" }`);
};