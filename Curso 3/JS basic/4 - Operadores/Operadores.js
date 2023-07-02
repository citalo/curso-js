//Aritméticos
//operadores segue a precedência da matemática: (),**,/,%,+,-.

const numbOne = 10;
const numbTwo = 3;

console.log(numbOne+numbTwo);// Soma 
console.log(numbOne-numbTwo);// Subtração
console.log(numbOne*numbTwo);// Multiplicação
console.log(numbOne/numbTwo);// Divisão
console.log(numbOne**numbTwo);// Potenciação - (10³)numbOne elevado a numbTwo
console.log(numbOne%numbTwo);// Resto da divisão

console.log("");

//Operador e incremento e decremento

let contador = 1;
contador++;//incrementa o valor da variável +1.
contador++;//ou ++contador
contador++;

console.log(contador);

contador--;//decrementa o valor -1.
contador--;

console.log(contador);

console.log("");

//Operador de atribuição

let passo = 10;

passo+=50;//passo = passo + 50;
console.log(passo);

passo*=10;//passo = passo * 10;
console.log(passo);

passo**=0;//passo = passo**0;
console.log(passo);

console.log("");

//Observação

let numero = 2;//number
let numero2 = "3";//string
let numero3 = "L2";//string

console.log(numero + numero2);// concatenará em 23 ao invés de 5.
console.log(numero + parseInt(numero2));//passa a string para inteiro
//Usa-se o parseInt() = inteiros, parseFloat()= decimais e number() = int ou float.
console.log(numero*numero2);// O JS corrigirá, mas erro deve ser evitado.
console.log(numero*numero3);// NaN - not a number.
