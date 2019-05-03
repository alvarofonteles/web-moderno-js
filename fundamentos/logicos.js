function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    //const comprarTV32 = !!(trabalho1 ^ trabalho2) //bitwiser xor
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaldavel = !comprarSorvete

    return {comprarSorvete, comprarTV50, comprarTV32, manterSaldavel}
}

console.log(compras(true, false))