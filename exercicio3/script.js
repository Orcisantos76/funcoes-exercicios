console.log("Ex 003")
const n1 = parseInt(prompt("digite um numero;"))
const n2 = parseInt(prompt("Digite outro numero"))
function quebra(){
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")}

// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).
quebra()
function somar(n1,n2){
    const soma = n1+n2
    return soma
}
const soma = somar(n1,n2)
console.log(`A soma entre os numero ${n1} e ${n2} é ${soma}`)
quebra()
//-----------------------------------------
function subtrair(n1,n2){
    const sub = n1-n2
    return sub
}
const subtracao = subtrair(n1,n2)
console.log(`A subtração entre ${n1} e ${n2} é ${subtracao}`)
quebra()
//-----------------------------------------
const multipl = (n1,n2)=>{
    const mult = n1*n2
    return mult
}
const multiplicando = multipl(n1,n2)
console.log(`A multiplicação entre ${n1} e ${n2} é igual a ${multiplicando}`)
quebra()
//-----------------------------------------
const div = (n1,n2)=>{
    const dividir = n1/n2
    return dividir
}
const dividindo = div(n1,n2)
console.log(`A divisao de ${n1} por ${n2} tem o resultado de ${dividindo}`)
quebra()
// b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.
    //feito nas linhas 2 e 3
// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
somar(n1,n2)
subtrair(n1,n2)
multipl(n1,n2)
div(n1,n2)

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.
const outraSoma = somar(n1,n2)
const outraSubtrair = subtrair(n1,n2)
const outraMult = multipl(n1,n2)
const outraDiv = div(n1,n2)

console.log(outraSoma)
console.log(outraSubtrair)
console.log(outraMult)
console.log(outraDiv)