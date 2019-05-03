// cadeia de protótipos (prototype chain)

Object.prototype.attr0 = 'Z' // (Não fazer isso) Exemplo para achar no prototype
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: 3}
const filho = {__proto__: pai, attr3: 'C'} // sombreamento como se fosse o sobrescrever

console.log(filho.attr1)
console.log(filho.attr0) // encontra no prototype do Object
console.log(filho.attrA) // não encontra no prototype do Object pois não há

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) //attr3 pegara do filho mesmo tendo em outro

// estudar com calma

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // sombrear (shadowing)
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())