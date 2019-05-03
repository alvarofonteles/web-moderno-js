const obj = {
    a: 'a',
    b: 2,
    c: 3,
    soma() {
        return b + c
    }
}
console.log(JSON.stringify(obj)) // converte para JSON
console.log(JSON.parse('{"a":"a", "b":2.6, "c":3, "d":true, "e":{},"f":[]}')) // Converte para Objeto

