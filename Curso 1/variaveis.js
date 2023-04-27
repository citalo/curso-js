//Variáveis em javascript - armazenam dados para serem executados
//Javascript não é uma linguagem fortemente tipada, ou seja, não precisa identificar o tipo.

//VAR=> maneira antiga de indicar variável, permite alteração de valor, redeclarável, não sequencial (nunca utilizar).
var nome="Italo"
console.log(`Meu nome é ${nome}`)
//LET=> permite alterar o valor, não redeclarável, sequencial(evitar utilizar).
let nomel="Italo"
nomel="Carlos"//reatribuição possível no let.
console.log(`Meu nome é ${nomel}`)
//CONST=> não permite alterar valor, não redeclarável, sequencial(utilizar).
const nomes= "Nogueira"//não pode ser redeclarado, nova variável para mesmo nome.
console.log (`Meu sobrenome é ${nomes}`)
