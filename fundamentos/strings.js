const empresa = 'ASSistemas'

console.log(empresa.charAt(3))
console.log(empresa.charCodeAt(3)) //code unicode
console.log(empresa.indexOf('t'))
console.log(empresa.substring(7))
console.log(empresa.substring(0, 7))

console.log("Empresa ".concat(empresa).concat('!'))
//console.log("Empresa " + empresa + '!')
console.log(empresa.replace('i', 'a'))

console.log('alvaro,leticia,lorena'.split(',')) //quebra string em array
//console.log('alvaro,leticia,lorena'.split(/,/))//regex

