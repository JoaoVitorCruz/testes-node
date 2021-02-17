var sumFunc = require('./modulos/sum')
var subFunc = require('./modulos/sub')
var divFunc = require('./modulos/div')
var multFunc = require('./modulos/mult')

let numero1 = 7 //primeiro valor a realizar as operaçoes
let numero2 = 8 //segundo valor a realizar as operaçoes

console.log(`A soma entre ${numero1} e ${numero2} é: ${sumFunc(numero1, numero2)}`)
console.log(`A subtração entre ${numero1} e ${numero2} é: ${subFunc(numero1, numero2)}`)
console.log(`A divisão entre ${numero1} e ${numero2} é: ${divFunc(numero1, numero2)}`)
console.log(`A multiplicação entre ${numero1} e ${numero2} é: ${multFunc(numero1, numero2)}`)