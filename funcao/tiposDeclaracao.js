//tipos de declarações

console.log(soma(3, 4)) //pode chamar antes
// function declaration
function soma(x, y) {
    return x + y
}

// funtion expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// nomed function expression (pouco usada)
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))


