//funcao sem retorno simples

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 5)
imprimirSoma(2) //segundo parametro underfined
imprimirSoma(2, 10, 4, 5, 6)//simplesmente ignora os demais parametros
imprimirSoma()//NaN (NÃO É NÚMERO

//funcao com retorno

function soma(a, b = 1) {
    return a + b
}

let retorno = soma(2)
console.log(retorno)
console.log(soma(7, 4))
console.log(soma())

