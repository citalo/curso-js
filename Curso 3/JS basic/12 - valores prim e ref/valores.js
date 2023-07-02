//Valores primitivos x valores por referência
/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null, bigint e symbol.

*/
let nome = 'Italo';
nome = 'Carlos';
console.log(nome);/* o valor foi trocado para a variável nome,
não houve uma mudança na string, que é imutável*/
console.log(nome[0]);
nome[0] = 'I';
console.log(nome[0]);// imutável.
//vejamos:
let a = 'A';
let b = a;//Cópia - local de memória diferentes.
console.log(a, b);
a = 'O';// não altera b.
console.log(a, b);

/*
Referenciais (mutáveis) - Arrays, Object e Function.
*/
let c = [1, 2, 3];//array
let d = c;//passado por referência, aponta para o mesmo local na memória.
let e = c;
console.log(c, d);
c.push(4);// não altera b.
console.log(c, d);//diferente da string, d também é alterado.
d.shift();//retira o primeiro índice.
console.log(c, d);//alterando a ou b, altera o local na memória.
console.log(e);
//para tornar as variáveis independentes deve-se criar um array puxando o outro:
let f = [...e];
console.log(f, e);
e.push(5);
console.log(f, e);//possuem lugares diferente na memória.