////Number
////Assim como na string o number tem seus métodos.
//let num1 = 1500;
//let num2 = 2.7;
//let num3 = 10.59874532114;
//let nan = num1*'Olá';

//console.log(num1 + num2);//não concatena, faz a soma.
//console.log(num1.toString() + num2.toString());//concatenação de string.
////acima, transforma o número em string sem alterar o o tipo na variável.
//let num1 = num1.toString();//Isso alteraria o número para string.
////representação binária:
//console.log(num1.toString(2));//apesar de ter string no método, colocando
////o (2) temos a representação binária do número.
//console.log(num3.toFixed(2));//Arredondando em duas casas decimais.
////acima, podemos escolher quantas casas decimais queremos arredondar.
//console.log(Number.isInteger(num1));//Verifica se o número é inteiro.
//console.log(Number.isInteger(num2));//lembrando que Number é interface.
//console.log(Number.isNaN(nan));//verifica se not a number (NaN);

////O JS segue o IEEE 754/2008 - CUIDADO COM CALCULOS DE MUITA PRECISÃO.
////Temos a seguinte imprecisão:

//let num4 = 0.1;
//let num5 = 0.7;

//console.log(num4+num5);//0.8 diferente de 0.799999999999999
//num5 += num4;//0.8
//num5 += num4;//0.9
//num5 += num4;//1.0
//console.log(num5);//0.99999999999 - errado.
//num5 += num4;//1.1
//num5 += num4;//1.2
//num5 += num4;//1.3
//num5 += num4;//1.4
//num5 += num4;//1.5
//num5 += num4;//1.6
//num5 += num4;//1.7
//num5 += num4;//1.8
//num5 += num4;//1.9
//num5 += num4;//2.0
//console.log(num5);

//num5 = Number(num5.toFixed(2));//Deve colocar esta formula no final da conta;
//console.log(num5);
//console.log(Number.isInteger(num5));
let num6 = 0;
let num7 = 0;

num6 = 0.1;
num7 = 0.7;

num7 += num6;//0.8
num7 += num6;//0.9
num7 += num6;//1.0
num7 += num6;//1.1 (aplicar o number seguido do método toFixed(nº de casas decimais))
console.log(num7);
num7 = Number(num7.toFixed(2));
console.log(num7);



