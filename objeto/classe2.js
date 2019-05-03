class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'JavaScript Developer') {
        super(sobrenome)
        this.profissao = profissao
    }
}

/*
const avo1 = new Avo('Fonteles')
const pai1 = new Pai(avo1.sobrenome)

console.log(pai1)*/

class Filho extends Pai{
    constructor(){
        super('Fonteles')
    }
}

const filho = new Filho()
console.log(filho)