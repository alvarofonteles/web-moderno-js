const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

let notasBaixas = []

for (let i in notas) {
    if (notas[i] < 7)
        notasBaixas.push(notas[i])
}

console.log(notasBaixas)

//com callback

notasBaixas = notas.filter(function (nota) {
    if (nota < 7) return nota
})
console.log(notasBaixas)

notasBaixas = notas.filter(function (nota) {
    return (nota < 7)
})
console.log(notasBaixas)

notasBaixas = notas.filter(nota => nota < 7) //Arrow Function CallBack
console.log(notasBaixas)

//mais elegante crianto uma funcao para usar em mais lugares
const notasMenorQue7 = nota => nota < 7 //Arrow Function
notasBaixas = notas.filter(notasMenorQue7) // CallBack
console.log(notasBaixas)