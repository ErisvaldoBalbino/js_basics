let inp = 85;

if (inp < 60) {
    console.log(`Nota ${inp} = Conceito F`);
} else if (inp >= 60 && inp <= 69) {
    console.log(`Nota ${inp} = Conceito D`);
} else if (inp >= 70 && inp <= 79) {
    console.log(`Nota ${inp} = Conceito C`);
} else if (inp >= 80 && inp <= 89) {
    console.log(`Nota ${inp} = Conceito B`);
} else {
    console.log(`Nota ${inp} = Conceito A`);
};