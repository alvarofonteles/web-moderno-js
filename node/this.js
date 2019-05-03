console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('dentro da funcao..')
    console.log(this === global)//  dentro aponta pra global

    console.log(this === module)
    console.log(this === module.exports)
    console.log(this === exports)

    this.perigo = 'dentro da funcao, aponta para global'
}

this.perigo = 'fora da funcao, aponta para exports/module.exports'

logThis()