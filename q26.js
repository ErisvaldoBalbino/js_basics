let array = ["a", "b", "c", "d", "e"];

function inverterArray(a) {
    let iarray = [];

    for (let i = a.length; i >= 0; i--) {
        iarray.push(a[i]);
    }

    return iarray;
}

console.log(`Invertido: [${inverterArray(array)}]`);
