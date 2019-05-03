const imprimirResultadoFinal = function (nota) {
    switch (Math.floor(nota)) {//Math.floor - arredonda pra baixo
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
            break
        case 3:
        case 2:
        case 1:
        case 0: {
            console.log('Reprovado')
            break
        }//posso colocar em um bloco mas é pouco usado
        default :
            console.log('Número Inválido')
    }
}

//**/

imprimirResultadoFinal(10)
imprimirResultadoFinal(8.8)
imprimirResultadoFinal(5)
imprimirResultadoFinal(2.2)
imprimirResultadoFinal(11)