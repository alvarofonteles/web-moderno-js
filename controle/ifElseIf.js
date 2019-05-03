Number.prototype.entre = function (inicio, final) {
    return this >= inicio && this <= final
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovao')
    } else {
        console.log('Número Inválido.')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.99)
imprimirResultado(3.99)
imprimirResultado(-1)