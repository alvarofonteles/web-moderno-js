function trataErro(erro) {
    throw new Error('...')
    //throw 'Mensagem'
    //throw true
    //throw 10
}

function imprimeirNome(obj) {
    try{
        console.log(obj.name.toUpperCase() + ' !!!' )//NÃO É NAME E SIM (nome)
    }catch (e) {
        trataErro(e)
    }finally {
        console.log('FINAL')
    }
}

const obj = {nome: 'Alvaro'}
imprimeirNome(obj)

