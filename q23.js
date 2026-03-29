function validarSenha(s) {
    const e = [];

    if (s.length < 8) {
        e.push("Mínimo 8 caracteres");
    }

    if (!/\d/.test(s)) {
        e.push("Precisa de número");
    }

    if (!/[A-Z]/.test(s)) {
        e.push("Precisa de maiúscula");
    }

    return {
        v: e.length === 0,
        e,
    };
}

console.log(validarSenha("e"));