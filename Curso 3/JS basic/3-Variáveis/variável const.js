/* Não podemos criar constantes com palavras reservadas.
Constantes precisam ter nomes de fácil identificação.
Não pode  começar o nome de uma constante com um número.
Não podem conter espaços ou traços.
Utilizamos camelCase.
Case-sensitive.
Não pode modificar o valor de uma constante.
Entre var, let e const, a prioridade é para const.*/

const nome = 'João';
console.log(nome);
// const nome; //não pode deixar uma variável const como idefinido.
//nome = 'Cleber' //não é possível modificar o valor de uma constante.
const primeiroNumero = 10;
const segundoNumero = "5";
const terceiroNumero = 5;
const resultado = primeiroNumero*segundoNumero; //calcula mesmo sendo string, exceto soma.
console.log(resultado);
// É melhor criar nova variável do que alterar,sistema se torna mais estável.
console.log(typeof resultado);// typeof diz o tipo de variável resultado.
console.log(typeof segundoNumero);
console.log(primeiroNumero + segundoNumero); //105 - soma, concatena string + number.
console.log(primeiroNumero + terceiroNumero); //15 - soma, executa o calculo.
console.log(typeof (primeiroNumero+segundoNumero)); //type of de expressão vem entre parêntese.
// o valor de uma constante pode ser atribuido a outra variável, mas não alterado a própria:
const number = 12;
let numero = number;
console.log(numero);
