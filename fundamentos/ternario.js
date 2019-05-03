const resultado = nota => nota >= 7 ? 'Aporovado' : 'Reprovado'/*SE*//*SENÃO*/

console.log(resultado(7.1))
console.log(resultado(6.8))

let notas = 8
const status = notas >= 7 ? 'Aporovado' : 'Reprovado'

console.log(status)

const resultados = nota => {
    return nota >= 7 ? 'Aporovado' : 'Reprovado' /*SE*/ /*SENÃO*/
}

console.log(resultados(7.1))