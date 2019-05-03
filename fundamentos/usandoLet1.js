var numero = 1
{
    let numero = 2
    console.log('dentro: ', numero)//let nao sobrescreve e nao usa fora do escopo
}
console.log('fora: ', numero)

//o uso da variave procura-se de dentro para fora do escopo
// o mais proximo

//o uso do let global no bloco pode-se usar o mesmo nome de variaval dentro do bloco

let num = 2
{
    let num = 5
    console.log('dentro', num)
}
console.log('fora', num)

let um = 5
{
    let dois = 4
    console.log(um)/* nesse caso ele vai procurar a variavel dentro do bloco
                    senão ele procura no bloco mais proximo fora
                    */
}
console.log(um)



