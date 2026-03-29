function saudacao(n, i = "pt") {
    switch(i) {
        case("en"):
            return (`Hello, ${n}`);
        case("es"):
            return (`Hola, ${n}`);
        default:
            return (`Olá, ${n}`);
    }
}

console.log(saudacao("Maria"));
console.log(saudacao("Maria", "en"));
console.log(saudacao("Maria", "es"));