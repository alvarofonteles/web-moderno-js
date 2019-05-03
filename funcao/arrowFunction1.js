let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implicito
console.log(dobro(Math.PI))

//---
let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
//ou assim
ola = _ => 'Olá' //possui um parametro _

console.log(ola())

let testes = (a, b) => a + b

console.log(testes(2,3))