const valor = 'Global'

function minhaFuncao() {
  console.log(valor)
}

function exec() {
  const valor = 'Local'//aqui nao assumira o valor, pois o valor
  // esta na outra funcao senao pega mais a fora
  minhaFuncao()
}

exec()