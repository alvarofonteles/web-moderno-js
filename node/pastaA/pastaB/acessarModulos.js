const moduloA = require('../../moduloA')
//const moduloA2 = require('D:\\Bitbucket\\Web Moderno JS\\EXERCICIOS-JS\\node\\moduloA.js') // caminho absoluto, não faz sentido

console.log(moduloA.ateLogo)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)

