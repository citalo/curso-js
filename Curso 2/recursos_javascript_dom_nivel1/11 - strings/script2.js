// STRINGS

let frase1 = "Esta frase serve para testes"
console.log(frase1.length)/*importante notar que o .(ponto) abre o método
esse length permite identificar a quantidade de caracteres importante em 
formulários.*/

let frase2 = "Esta frase não serve apenas para testes"
console.log(frase2.indexOf("não")) // verifica a posição (index) da palavra
let frase3 = "Esta frase está dividida em duas."
let frase4 = "Esta é a segunda parte."
let frase_final = frase3 + " " + frase4 /*permite vincular duas frases
o + siginifica acrescentar e o " "(string espaço) é para não juntar.*/
console.log(frase_final)