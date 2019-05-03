Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['alvaro', 'lorena', 'leticia', 'jane']

aprovados.forEach2((nome, indice) => {
    console.log(`${indice + 1}) ${nome}`)
})