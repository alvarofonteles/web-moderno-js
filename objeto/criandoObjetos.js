// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)

console.log(p1.nome)
p1.nome = 'Lápis'
console.log(p1.nome)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30).toFixed(2) * (30 - faltas).toFixed(2)
        }
    }
}

const f1 = new criarFuncionario('Leticia', 3800, 4)
console.log(f1.nome)
console.log(f1.getSalario())

const f2 = new criarFuncionario('Lorena', 8000, 2)
console.log(f2.nome)
console.log(f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Lorena'
console.log(filha)

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)