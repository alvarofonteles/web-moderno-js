const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // antigo
const obj2 = { a, b, c }
console.log(obj1, obj2) //ec2015

const nomeAttr = 'nome'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = { [nomeAttr]: valorAttr }
console.log(obj4)

const obj5 = {
    funcao: function () {
        //...
    },
    funcao2() {// ES6
        //...
    }
}
console.log(obj5)

