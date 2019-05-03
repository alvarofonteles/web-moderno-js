const prod1 = {}
prod1.nome = 'Oreo'
prod1.valor = 4.99
prod1['desc prod'] = 0.99 //evitar atributos com espaço

console.log(prod1)
//console.log

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.98,

    prod3 : {
        nome: 'Calsa Jeans',
        preco: 169.98
    }
}

prod2['desc prod'] = 0.79
console.log(prod2)

//objeto
const veiculo = {
    marca: 'Fiat',
    cor: 'Azul',
    preco: 19000.99
}
console.log(veiculo)
//json (javascript object notation) - {"marca":"Fiat", "Cor":"Azul", "Preco":19000.99}