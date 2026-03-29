let n = 20;

let ar = [];

for (let i = 2; i <= n; i++) {
    let primo = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        ar.push(i);
    }
}

console.log(ar);
