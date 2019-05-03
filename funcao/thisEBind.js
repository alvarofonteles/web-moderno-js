const pessoa = {
    saudacao: 'Bom dia...',
    falar() {
        console.log(this.saudacao)
    }
}

//console.log(pessoas.saudacao)
pessoa.falar()
const falar = pessoa.falar
falar() //undefined - conflito entre paradigmas e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const falar2 = pessoa.falar //a funcao bind nao altera
falar2()