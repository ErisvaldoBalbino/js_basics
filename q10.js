function calc(a,b,c) {
    if (a+b > c && a+c > b && b+c > a) {
        console.log("Triangulo válido");
        if (a == b && b == c && c == a) {
            return "Equilátero";
        } else if (a == b || b == c || c == a) {
            return "Isósceles";
        } else if (a != b && b != c && c != a) {
            return "Escaleno";
        }

    } else {
        console.log("Não é um triangulo válido");
        return;
    }
}

console.log(calc(3,4,5));