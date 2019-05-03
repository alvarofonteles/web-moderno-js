let a = 3
global.be = 5
this.c = 7
this.d = 9

console.log(this === module.exports)

console.log(a)
console.log(global.be)
console.log(this.c)
console.log(module.exports)
console.log(module.exports.d)