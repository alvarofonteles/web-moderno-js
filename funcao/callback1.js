const fabricantes = ['mercedes', 'audi', 'bmw']

let imprimir = (nome, indice) => console.log(`${indice + 1}. ${nome}`)


//fabricantes.forEach((value, index, array) => console.log(index + 1 + '. ' + value + ' - [' + array + ']'))
//fabricantes.forEach((value, index) => console.log(index + 1 + '. ' + value))

fabricantes.forEach(imprimir)

fabricantes.forEach(fabricante => console.log('Nome Fabricante: ' + fabricante))

fabricantes.forEach(function (fabricante) {
    console.log(fabricante)
})

fabricantes.forEach((...tudo) => console.log(tudo))