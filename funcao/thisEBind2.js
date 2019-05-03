function Pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //this.idade não aponta pra o this.idade da fução mais externa

    /*const self = this //outra alternativa
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }, 1000)*/

}

//new Pessoa()


function Pessoa2() {
    this.idade = 0
    this.theshold = 5
    let interval = setInterval(function () {
        this.idade++
        if (this.idade === this.theshold) {
            clearInterval(interval);
        }
        console.log(this.idade)
    }.bind(this), 1000)

}

new Pessoa2()
