// Classe
class Pessoa1 {

  constructor(nome) {
    this.nome = nome
  }

  falar1() {
    console.log(`Uma Classe - Olá meu nome é ${this.nome}`)
  }
}

// Funcao Construtora
function Pessoa2(nome) {
  this.falar2 = () => {
    return console.log(`Uma Função Construtora - Olá meu nome é ${nome}`)
  }
}

const p1 = new Pessoa1('Leticia')
p1.falar1()

const p2 = new Pessoa2('Lorena')
p2.falar2()

// Função Factory
const pessoa3 = (nome, idade) => {
  return {falar3: () => console.log(`Uma Função Factory - Meu nome se chama ${nome} e minha idade é ${idade}`)}
}

const p3 = pessoa3('Leticia', 8)
p3.falar3()