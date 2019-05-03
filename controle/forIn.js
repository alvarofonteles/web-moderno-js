const nota = [7.6, 9.5, 4.5, 9.6]

for (let i in nota) {
    console.log(i + ' = ' + nota[i])
}

/*
* com objeto
*/

const logradouro = {
    nome: 'Avenida Domingos',
    numero: 1234,
    cep: '60000-000'
}

for (let i in logradouro) {
    console.log(i + ' = ' + logradouro[i])
}

//exemplo da net - ainda não entendi
/*function myFunction(item, index) {
    console.log("index[" + index + "]: " + item);
}

let numbers = [4, 9, 16, 25, 55, 98]
numbers.forEach(myFunction)*/
