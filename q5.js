let input_1 = "12 + 8";
let input_2 = "12 - 8";
let input_3 = "12 * 8";
let input_4 = "15 / 4";

let ops = ["+", "-", "*", "/"];

let op = input_1.split(" ");

if (op[1] == "+") {
    console.log(`${op[0]} + ${op[2]} = ${parseFloat(op[0]) + parseFloat(op[2])}`);
} else if (op[1] == "-") {
    console.log(`${op[0]} - ${op[2]} = ${parseFloat(op[0]) - parseFloat(op[2])}`);
} else if (op[1] == "*") {
    console.log(`${op[0]} * ${op[2]} = ${parseFloat(op[0]) * parseFloat(op[2])}`); 
} else {
    console.log(`${op[0]} / ${op[2]} = ${parseFloat(op[0]) / parseFloat(op[2])}`);
}