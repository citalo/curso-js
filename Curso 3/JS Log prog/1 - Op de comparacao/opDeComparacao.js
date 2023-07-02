/*
OPERADORES DE COMPARAÇÃO

>  Maior que
>= Maior ou igual que
<  Menor que
<= Menor ou igual que
== Igual (valor)
=== Igual (valor e tipo)
!=  Diferente (valor)
!== Diferente (valor e tipo)

OPERADOR DE ATRIBUIÇÃO
= Operador de atribuição (recebe valores...),
não tem relação com os operadores de comparação.

*/
const num = 10;
const num2 = 20;
const num3 = '10';
const num4 = 20;

let comp = num2 > num;
console.log(comp);
comp = num2 < num;
console.log(comp);
comp = num == num3; //Não utilizar
console.log(comp);
comp = num2 === num4; //recomendado
console.log(comp);
comp = num2 !== num4;
console.log(comp);
comp = num != num3; //Não utililzar
console.log(comp);
comp = num2 !== num4;//recomendado
console.log(comp);

//comparar apenas valores, admitir string pode gerar um bug posterior.