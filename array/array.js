console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('alvaro', 'leticia', 'lorena')
console.log(aprovados)

aprovados = ['bia', 'lucas', 'joao']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])


aprovados[3] = 'marcos'
aprovados.push('pedro')
console.log(aprovados.length)

aprovados[9] = 'jane'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //ordena e cria novo array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['nadia', 'anderson', 'natalia']
//aprovados.splice(2, 2, 'magda') //função que adiciona e/ou exclui
aprovados.splice(2, 0, 'magda') // valor 0 nao exclui
console.log(aprovados)
