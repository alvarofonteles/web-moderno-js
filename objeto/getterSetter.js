const sequencia = {
    _valor: 1, //convenção (privado)
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // menor que o valor, continua com o anterior
console.log(sequencia.valor, sequencia.valor)

