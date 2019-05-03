const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1499.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Salvo com sucesso')
})


