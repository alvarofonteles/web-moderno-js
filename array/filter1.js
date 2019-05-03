const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log('1)', produto.filter(e => e.preco > 2500)) //retorna true ou false

console.log('2)', produto.filter(function (e) {
    return e.preco > 2500
}))

console.log('3)', produto.filter(e => e.preco >= 500 && e.fragil == true))

// ou filter de filter
console.log('4)', produto.filter(e => e.preco >= 500).filter(e => e.fragil == true))

// ou assim
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log('5)', produto.filter(caro).filter(fragil))



