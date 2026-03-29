const Carrinho = [
  { nome: "Camiseta", preco: 45.90, quantidade: 2 },
  { nome: "Tenis", preco: 189.90, quantidade: 1 },
  { nome: "Meia", preco: 12.50, quantidade: 3 }
]

var st = 0;
var des = [];
var t = 0;

for (let i = 0; i < Carrinho.length; i++) {
    st += Carrinho[i].preco * Carrinho[i].quantidade;    

    if (Carrinho[i].preco > 50) { 
      des.push({ nome: Carrinho[i].nome, desconto: Carrinho[i].preco * 0.1 })
    };
}

console.log(`Subtotal: R$${st.toFixed(2)}`)
for (let i = 0; i < des.length; i++) {
    console.log(`Desconto (${des[i].nome}): -R$${des[i].desconto.toFixed(2)}`)
    t += des[i].desconto;
}
console.log(`Total: R$${(st - t).toFixed(2)}`)
