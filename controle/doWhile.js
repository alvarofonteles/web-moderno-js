function imprimeNumerosAleatorios(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 // ele aceita o valor que ele precisa pra sair

do {
    opcao = imprimeNumerosAleatorios(-1, 10)
    console.log(`Opção escolhida foi: ${opcao}`)
} while (opcao != -1)