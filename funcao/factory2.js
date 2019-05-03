function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.5
  }
}

console.log(criarProduto('Bicicleta', 650.99))
console.log(criarProduto('Geladeira', 1259.98))
