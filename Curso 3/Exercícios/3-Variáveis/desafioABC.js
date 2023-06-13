
let varA = 'A';//B
let varB = 'B';//C
let varC = 'C';//A

console.log(varA,varB,varC);

//Apresente o valor B C A, apenas utilizando valores já contidos nas variáveis:
/*const varATemp = varA//guarda o valor da variável;
varA = varB;//muda o valor da variável;
varB = varC;
varC = varATemp;*/

[varA, varB, varC]=[varB, varC, varA]//outra solução sem criar variáveis;
console.log(varA,varB,varC);