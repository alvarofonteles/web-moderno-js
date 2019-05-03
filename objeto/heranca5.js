console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Não existe reverse na api, tem que ser criado
String.prototype.reverse = function () {
    return this.split('').reverse().join('') //quebra em array, reverte e junta novamente
}

console.log('alvaro'.reverse())

// Não existe o first
Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd'].first())

console.log('alves'.split('').reverse().join(''))