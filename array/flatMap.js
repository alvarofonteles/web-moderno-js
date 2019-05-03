const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Alvaro',
        nota: 8.1
    }, {
        nome: 'Leticia',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Jane',
        nota: 8.9
    }, {
        nome: 'Lorena',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)