const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)

const func1 = (x, y) => x * y

imprimirResultado(3, 4, func1)

/*
const soma2 = function (x, y) {
    let z = 0
    z = x + y
    if (z > 2) {
        return z
    }
    return soma2(x, y)
}
console.log(soma2(3,4))*/

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}
pessoa.falar()

const end = {logr: () => 'Rua'}
console.log(end.logr())