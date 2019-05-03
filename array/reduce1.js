const nums = [1, 2, 3, 4]

let reducer = (x, y) => x + y

console.log(nums.reduce(reducer))
console.log(nums.reduce(reducer, 5))

const alunos = [
    {nome: 'alvaro', nota: 7.3, bolsista: false},
    {nome: 'letica', nota: 9.2, bolsista: true},
    {nome: 'lorena', nota: 9.8, bolsista: false},
    {nome: 'jane', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)