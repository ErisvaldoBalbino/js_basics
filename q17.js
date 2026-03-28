let inp = 4
let char = '*'

for (let i = 1; i <= inp; i++) {
    let spaces = ' '.repeat(inp - i);
    console.log(`${spaces}${char.repeat(2 * i - 1)}`);
}