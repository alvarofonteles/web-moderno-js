const pessoa = { nome: 'lorena' }
pessoa.nome = 'leticia'
console.log(pessoa)

Object.freeze(pessoa)
pessoa.nome = 'lorena'
pessoa.end = 'rua abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)
console.log('')

// assim congela a referencia e os objetos
const pessoaConstate = Object.freeze({ nome: 'alvaro' })
pessoaConstate.nome = 'fonteles'

console.log(pessoaConstate)