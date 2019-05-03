// Factory simples

function criarPessoa() {
  return {
    nome: 'Leticia',
    sobrenome: 'Braga'
  }
}

console.log(criarPessoa())

const teste = new criarPessoa()
console.log(teste.nome)

//--
function criarPessoa2(nome, sobrenome) {
  return {
    nome: nome,
    sobrenome: sobrenome
  }
}

const teste2 = new criarPessoa2('Jane', 'Bezerra')
console.log(teste2.sobrenome)

function criarProduto(nome, preco) {
  return {
    nome: nome,
    preco: preco,
    desconto: 0.5
  }
}

console.log(criarProduto('Bicicleta', 650.99))
console.log(criarProduto())
const prod2 = new criarProduto('Geladeira', 1259.98)
console.log(prod2.nome)

