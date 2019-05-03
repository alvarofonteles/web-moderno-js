function Obj(nome) {
    this.nome = nome
    this.exec2 = function () {
        console.log('Exec...')
    }
}

const obj1 = new Obj('Alvaro')
const obj2 = new Obj('Leticia')

console.log(obj1.nome)
console.log(obj2.nome)
obj2.exec2()

/*function Obj2(nome) {
    this.nomes  = nome
    return console.log(nome)
}

Obj2('Lorena')*/
