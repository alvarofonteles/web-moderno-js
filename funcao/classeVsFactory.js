// Classe
class Pessoa1 {

  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log(`Olá meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa1('Lorena Braga')
p1.falar()

// Funcao Factory
const pessoa = (nome, idade) => {
  return {falar: () => console.log(`Meu nome se chama ${nome} e minha idade é ${idade}`)}
}

const p2 = pessoa('Leticia', 8)
p2.falar()