// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes.

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
// console.log('Olá')

// function saudacao(nome){
//     console.log(`ola ${nome}`)
// }
// saudacao("Orci")

function tabuada(numero){
    console.log(`${numero} * 1 = ${numero*1}`)
    console.log(`${numero} * 2 = ${numero*2}`)
    console.log(`${numero} * 3 = ${numero*3}`)
    console.log(`${numero} * 4 = ${numero*4}`)
    console.log(`${numero} * 5 = ${numero*5}`)
    console.log(`${numero} * 6 = ${numero*6}`)
    console.log(`${numero} * 7 = ${numero*7}`)
    console.log(`${numero} * 8 = ${numero*8}`)
    console.log(`${numero} * 9 = ${numero*9}`)
    console.log(`${numero} * 10 = ${numero*10}`)
}
tabuada(2)

console.lo
// usando metodo arrow, ainda na duvida

const tabuada2 = (numero)=>{
    console.log(`${numero} * 1 = ${numero*1}`)
    console.log(`${numero} * 2 = ${numero*2}`)
    console.log(`${numero} * 3 = ${numero*3}`)
    console.log(`${numero} * 4 = ${numero*4}`)
    console.log(`${numero} * 5 = ${numero*5}`)
    console.log(`${numero} * 6 = ${numero*6}`)
    console.log(`${numero} * 7 = ${numero*7}`)
    console.log(`${numero} * 8 = ${numero*8}`)
    console.log(`${numero} * 9 = ${numero*9}`)
    console.log(`${numero} * 10 = ${numero*10}`)
}
tabuada2(3)