const pai = {nome: 'Alvaro', corCabelo: 'Preto'}

const filho1 = Object.create(pai)
filho1.nome = 'Leticia'
console.log(filho1.corCabelo)

const filho2 = Object.create(pai, {
    nome: {
        value: 'Lorena', writable: false, enumerable: true
    }//, corCabelo: {value: 'Castanho', writable: true, enumerable: true}
})

console.log(filho2.nome)
filho2.nome = 'Julia'
console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`)

for (let key in filho2) {
    filho2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herença: ${key}`)
}
//hasOwnProperty ser vem por herança ou pertence (true - pertence ao proprio objeto)