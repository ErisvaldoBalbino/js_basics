let array = [10,30,20,25,23];
let secret = 23;
let tent = 0;

for (let index = 0; index < array.length; index++) {
    if (array[index] > secret) {
        console.log(`${array[index]} - O número é maior`);
        tent += 1;
    } else if (array[index] < secret) {
        console.log(`${array[index]} - O número é menor`);
        tent += 1;
    } else {
        tent += 1;
        console.log(`${array[index]} - Acertou em ${tent} tentativas`);  
        break;
    }
}