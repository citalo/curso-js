//FUNÇÕES


//FUNÇÃO CLÁSSICA
//function saudacao (nome) {
//    return  `Bom dia, ${nome}!`;
   
//} /* inicia-se pelo palavra function, é dado um nome como nas variáveis,
// coloca o parênteses que pode conter parâmetros que recebem valor
//da função, e o corpo dentro de {}, com o que se quer que a função armazene.*/

 //saudacao('Italo');//chama a função criada, tal qual promp, alert... dentro 
 //do () coloca-se o argumento.
 //saudacao('Maria');
 
 //É possível salvar o que a função retorna em uma variável:
 //const variavel = saudacao('Raissa');//saudacao pode reutilizado.
 //console.log(variavel);

 function soma (x,y) {
    const resultado = x + y;
    return resultado;//return encerra a função, não lido nada abaixo dele.
    console.log('hello word!');//não será lido.
 }//corpo da função é protegido.

 //console.log(soma(2,5));
 //console.log(soma(5,5));
 //console.log(soma(2,-3));
 //console.log(soma('Carlos',' Italo'));

 const resultado = soma(2,2);//foi possível declarar const novamente e com mesmo nome
 //por este está em escopos diferentes (local/global).
 console.log(resultado);//variáveis com escopo diferente não se comunicam.
 
//FUNÇÃO ANÔNIMA

const raiz = function (n) {
    return n**(1/2);
};//função junto a variável.

console.log(raiz(9));//nome da variável ao invés da função.
console.log(raiz(16));


//ARROW FUNCTION
//Completa
const raiz2 =  (n) => {
    return n**(1/2);//subtitui a palavra function atrás para flexa na frentte.
}   
console.log(raiz2(25));
//simplificada
function raiz3(n) {
    return n ** (1 / 2);
}//se for apenas um parametro a arrow pode ser
//simplicada ao modo acima, eliminando (), return e {}.
console.log(raiz3(100));

 