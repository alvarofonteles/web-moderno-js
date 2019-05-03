//Função em JS é First-Class Object (Citizens)
//função de alta orderm (Higher-order function)

//Criar de uma forma literal
function fun1() {
}

//Armazenar em uma variável
const fun2 = function () {//função anomima
}

//Armazenar em um array
const array = [function (a, b) {
    return a + b
}, fun1, fun2]

console.log(array[0](2, 3))
console.log(array[1]())

//Armazenar em um atributo de um objeto

const obj = {}
obj.falar = function () {
    return 'oi...'
}

console.log(obj.falar())

//ou assim
const obj2 = {
    cantar: function () {
        return 'lá lá lá...'
    }
}

console.log(obj2.cantar())

obj2.chamar = function () {
    return 'eiiiii...'
}

obj2.sair = 'xau'

console.log(obj2.chamar())
console.log(obj2)

//Passar função como parametro
function run(funcao) {
    funcao()
}

const fun3 = function () {
    return console.log('Executando....')
}

run(fun3)

//ou assim
run(function () {
    return console.log('Executando....')
})

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(3, 5)(7)

//ou assim
const returnoSoma = soma(6,8)
returnoSoma(9)

