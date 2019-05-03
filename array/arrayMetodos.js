const pilotos = ['vetel', 'alonso', 'raikkonen', 'massa']
pilotos.pop() // remove o ultimo elemento
console.log(pilotos)

pilotos.push('verstappen') // inclui o ultimo elemento
console.log(pilotos)

pilotos.shift() //remove da primeira elemento
console.log(pilotos)

pilotos.unshift('hamilton') // inclui o primeiro elemento
console.log(pilotos)

// splice pode adicionar e remover elementos
pilotos.splice(2, 0, 'bottas', 'massa') // a parti do indice 2
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array a parti do indice 2
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // novo array a parti do indice 1 ao 3 o 4 nao entra
console.log(algunsPilotos2)
