function Pessoa() {
    this.idade = -1

    let pararInterval = setInterval(() => { //this dentro do arrow function não varia
        this.idade++
        console.log(this.idade)
        if (this.idade == 3) clearInterval(pararInterval)
    }, 1000)
}

new Pessoa /*ou Pessoa() // se for instaciar para acessar*/