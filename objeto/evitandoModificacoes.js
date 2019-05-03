// Object.preventExtensions
const produto = Object.preventExtensions({nome: 'Qualquer', preco: 1.99, tag: 'promoção'})
console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // não adiciona pois é (Object.preventExtensions)
                                                // e nao é permitido adicionar
delete produto.tag // excluir pode
console.log(produto)

// Object.seal // (Sela), Não adiciona, nao exclui mas modifica
const pessoa = Object.seal({nome: 'Leticia', idade: 7})
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Fonteles'
delete pessoa.nome
pessoa.idade = 8
console.log(pessoa)
