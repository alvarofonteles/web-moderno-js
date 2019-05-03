//novo recurso do EC2015

const pessoa = {
    nome: 'Alvaro',
    idade: 35,
    enderecos: {
        logradouros: 'Dionisio Leonel',
        numero: 1570
    }
}

const {nome, idade} = pessoa

console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bloco = true} = pessoa
console.log(sobrenome, bloco)

const {enderecos: {logradouros, numero, cep}} = pessoa
console.log(logradouros, numero, cep)