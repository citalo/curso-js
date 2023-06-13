//Alert
//alert ("Nossa mensagem!");//quando usa (), chama uma função que executa uma ação.
//alert é um atalho para window.alert(),similiar ao que ocorre com console.log()
//não é executado no node.js

//Confirm
//window.confirm('Realmente deseja apagar?'); //utilizado para dar confirmação de uma ação.

//Prompt
//window.prompt("Digite o seu nome:"); // chama o usuário a fazer um input.

//Capturar o valor window em uma variável:

//const confirma = confirm("realmente deseja apagar?");
//console.log (typeof(confirma));

//let numero = prompt('digite um número'); //guardará na memória, o valor de input.
//Cuidado, pois o prompt retorna como string, o incremento retifica para number.
//numero++;
//console.log(numero); //aparecerá o número digitado mais 1.
//console.log(typeof(numero));

let num1 = prompt("Digite um número!");
let num2 = prompt("Digite um número!");

let resultado = num1 + num2;
console.log (resultado);//observe que deste modo teremos uma concatenação.
console.log (typeof(resultado));
num1 = Number(num1);
num2 = Number(num2);
resultado = num1 + num2;
console.log (resultado);
console.log (typeof(resultado));
alert(`O resultado foi ${resultado}!`);