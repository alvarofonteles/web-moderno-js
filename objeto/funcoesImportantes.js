const pessoa = {
    nome: 'Leticia',
    idade: 8,
    peso: 30
}

console.log(Object.keys(pessoa)) // chave
console.log(Object.values(pessoa)) // valores
console.log(Object.entries(pessoa)) // array de [chave, valor]

console.log('')

Object.entries(pessoa).forEach((e) => {
    console.log(`${e[0]}: ${e[1]}`)
})
console.log('')

// outra forma de usar o forEach
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '10/03/2010'
})

pessoa.dataNascimento = '01/01/2019' //não assumirá pois está false (writable: false,)
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) // pois é ( enumerable: true,)

// Object.assing (ECMAScript 2015, ES6)
const dest = {a:1}
const obj1 = {b:2}
const obj2 = {c:3, a:4} //sobre escreve se tiver a mesma assinatura
const obj = Object.assign(dest, obj1, obj2) //recebe todos os objetos listados na assinatura

console.log(obj)
console.log('')

Object.freeze(obj)
obj.c = 1234
console.log(obj)


