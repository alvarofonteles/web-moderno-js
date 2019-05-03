const quaseArray = {0: 'alvaro', 1: 'leticia', 2: 'lorena'}

console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function () {
        return Object.values(this)
    }, enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['alvaro', 'leticia', 'lorena']

console.log(meuArray, quaseArray.toString())

