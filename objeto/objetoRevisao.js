// colecao dinamica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Lorena Braga',
        idade: 22,
        endereco: {
            logradouro: 'Av. Abolição',
            numero: 456
        }
    },
    condutores: [{
        nome: 'Jane Kelly',
        idade: 55
    }, {
        nome: 'Leticia Braga',
        idade: 30
    }],
    calcularValorSeguro: function () {
        //...
    }
}
console.log('')
console.log(carro)
console.log('')
console.log(`Modelo do Carro: ${carro.modelo}`)
console.log(`Proprietário(a): ${carro.proprietario.nome}`)
console.log(`Endereço Proprietário(a): ${carro.proprietario.endereco.logradouro}, Nº ${carro.proprietario.endereco.numero}`)
console.log(`Condutor(a): ${carro.condutores[1].nome}`)

delete carro.condutores
delete carro.proprietario
delete carro.calcularValorSeguro

console.log('')
console.log(carro)