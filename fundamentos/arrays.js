const valores = [7, 7.7, 8, 11]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 21

console.log(valores)
console.log(valores.length)
valores.push({id:3}, false, null, 'teste') //adiciona item
console.log(valores)
console.log(valores.pop()) //retira o ultimo item do array
console.log(valores)
delete valores[0] //deleta(objeto) o item do array pelo indice
console.log(valores)

console.log(typeof valores) //tipo object
