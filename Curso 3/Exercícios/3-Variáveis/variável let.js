//Observe a repetição de nomes, isso pode ser mais complexo.
/*console.log('João nasceu em 1987.');
console.log('Em 2000, João conheceu Maria.');
console.log('João casou-se com Maria em 2012.');
console.log('Maria teve um filho com João em 2015.');
console.log('O filho de João se chama Eduardo.');*/

//Utlizando a variavel
/*let nome = 'João'; //string

console.log(nome, 'nasceu em 1987.');
console.log('Em 2000,', nome, 'conheceu Maria.');
console.log(nome,'casou-se com Maria em 2012.');
console.log('Maria teve um filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.')*/

//para modificar, é só redeclarar, poupando tempo.
/*let nome = 'Otávio'; //string

console.log(nome, 'nasceu em 1987.');
console.log('Em 2000,', nome, 'conheceu Maria.');
console.log(nome,'casou-se com Maria em 2012.');
console.log('Maria teve um filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.')*/

//reservando variável sem valor
let nome;//declaração da variável
console.log(nome);
nome = "Júlia"; //declaração de valor posteriormente.
console.log(nome);
nome = "Gabriele";//novo valor da variável nome (possível apenas para var e let)
console.log(nome);
//let nome = "Isa";//não pode redeclarar variáveis com let;
nome = "Isa"; //apenas redeclara o valor;
console.log(nome);
/*let console = 10;//Não é possível utilizar palavras reservadas da linguagem.
console.log(console);*/
//quanto mais detalhado o nome da variável,melhor, com camelCase:
//let numeroDeAlunos  = 200 é melhor do que let n = 200.
//não pode ter variável iniciada com número.
//não pode conter espaços ou traços (-), utiliza-se camelCase:
//ExemploDeCamelCase
//JS é uma linguagem case-sensitive portanto Cliente é diferente de cliente.
let nomeCliente = 'João';
let nomecliente = 'Ana';
console.log(`${nomeCliente} e ${nomecliente}`);
//NÃO UTILIZE VAR, UTILIZE LET.
