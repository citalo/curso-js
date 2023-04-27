/*sintaxe = conjunto de regras de uma linguagem.*/

let cor = "azul"
let Cor = "verde"

console.log(Cor)
/*temos que Cor é diferente de cor.
Javascript é case sensitive, diferencia letras maiusculas e minusculas.*/
console.log("teste 1") /*permite não utilizar ;(ponto e vírgula) se último elemento*/
//console.log("teste 2") - com // pode inviabilizar parte do código e comentar também.
console.log("teste 3"); console.log("teste 4") /*se na mesma linha precisa de ;*/
//Variáveis:

/*var tem instrução de funções - não é muito utilizado livre devido ao escopo global
devido a isso, junto com as function são levados ao início e pode gerar confusão, também
um nome é vinculado apenas a um let ou var, adimite redeclarações, mas não mudanças
de tipo.
*/
var nome = "Italo"//string
var idade = 21 //número
var administrador = false //booleano

var cidade //outra forma de declarar variáveis.
cidade = "Fortaleza" 

var valor =1, vetor = 10, amigo = "Val" //conjunto de declarações de mesmo tipo.

//Let e Const --> intrduzidas pelo Ecmascrip 6 - tem instrução de códigos.

let texto = "frase de um texto"
const pi = 3.14 //números adotam o modelo amaricano de . e não de ,
texto = "nada" // let pode ser redeclarado, diferente do const.

//existem algumas formas de escrever em JS.

let profissão = "analista" //aceita pontuações nas variáveis.

//console.log(profissão) //similar ao print (mais utilizado e indicado)
//alert(profissão) //esse código apresenta erro no Node mas gera um
//aviso em janela para o usuário no browser.
document.write (profissão) /* mas escreve direto no browser, desconsiderando
os dados no html*/
