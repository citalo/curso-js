//JS permite array com tipagens diferentes, porém não é uma boa prática.
const conjunto = ['Luiz','Maria', 'João',1,true];//array conjunto de dados, simbolizado por [] em JS.
//indexação      0      1       2
const alunos = ['Luiz','Maria','João'];//Boas práticas array por tipo.
//ver array em tabela:
//console.table(alunos);
//selecionar um elemento pelo índice:
//console.log(alunos[2]);//similar as strings pega o index correspondente.
//Substituir um elemento por outro:
alunos[1] = 'Eduardo';
//console.table(alunos);
//Adicionar elemento no array:
//1ª forma:
//alunos[3] = "Raissa";//atribuir índice que não existe, DEVE SABER O TAMANHO DO ARRAY.
//console.table(alunos);
//2ª forma:
//console.log(alunos.length);
alunos[alunos.length] = "Italo";/*atribui no último índice de forma mais segura.Tamanho 
//do array corresponde ao ultimo indice +1, por não conter o zero*/
//console.table(alunos);
//3ª forma:ADICIONA NO FINAL - mais simples pela função PUSH.
alunos.push('Raquel','Bruno','Nino');
//console.table(alunos);
//4ª forma: ADICIONA NO INÍCIO NO INDEX 0 - função UNSHIFT.
alunos.unshift('José');
//console.table(alunos);
//Romover elemento do FINAL do array: função POP.
alunos.pop();//pode ser atribuido a uma variável.
//console.table(alunos);
//Romover elemento do ÍNÍCIO do array: função SHIFT
alunos.shift();
//console.table(alunos);
//Remover elemento sem alterar índice (índice ficará vazio).
delete alunos[1];
//console.table(alunos);
//console.log(alunos[1]);// undefined - elemento não existe na memória.
//Selecionar parte do array em um determinado intervalo:
const selecao = alunos.slice(2,4);//como na string não considera o último indice por este inicar de ZERO.
//console.table(alunos);
//console.table(selecao);
const selecao2 = alunos.slice(-2);//selecionará os dois últimos.
//console.table(selecao2);
//Saber se é determinada variável é um array:
const numero1 = 2;
console.log(selecao instanceof Array);
console.log(numero1 instanceof Array);


