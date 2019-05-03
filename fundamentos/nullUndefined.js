//atribuição por referencia - ocupa mesmo espaço na memoria

const a = {name: 'Teste'}
console.log(a)

const b = a
console.log(b)

b.name = 'opa'
console.log(b)
console.log(a.name)

//atribuição por valor

let c = 3
let d = c

d++

console.log(d)
console.log(c)

//------------
let valor //não inicializada
console.log(valor)

valor = null//ausência de valor
console.log(valor)
//console.log(valor.toString())//Erro!

const produto = {}
//produto.preco = {a:'nome'}
//console.log(produto.preco.a)
console.log(produto.preco)

console.log(produto)

produto.preco = 3.68
console.log(produto)

produto.preco = undefined //evitar
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null//esse produto está sem preço
console.log(!!produto.preco)
console.log(produto)