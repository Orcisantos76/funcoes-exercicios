// # Exercício 2
// Declare e invoque as funções abaixo:

// a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.
function somar (n1,n2){
    const soma = n1+n2
    return soma
}
const resposta = somar(6,2)
console.log(`A soma entre os numeros é ${resposta}`)

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
function maior(n1,n2){
    const maior = n1>=n2 
    console.log(`O primeiro número é maior ou igual ao segundo? ${maior}`)
}
maior(4,5)
// c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.
function parOuImpar(n1){
    const numero = n1%2 === 0
    return numero
}

console.log(parOuImpar(9))
console.log(`O numero é par? ${parOuImpar(9)}`)

// d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

function salar(salario){
    const des= salario/100*10
    const salLiq = salario-des
    return salLiq
}
console.log(salar(1000))