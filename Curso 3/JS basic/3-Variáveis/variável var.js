//Diferenças entres as variáveis:
//var
var nome; // variável indefinida
var nome = 'Italo';
var nome = 'João';//var pode ser redeclarada.
console.log(nome);
nomeb = 'Isaque';//não expresso, o comportamento é de var, NÃO USAR NUNCA.
console.log(nomeb);
nomeb = 'Bruno';
console.log(nomeb);

//let
let nome2; // variável idefinida
nome2 = "Gabriel";
//let name2 = "Jorge"; //Não permite redeclarar a variável
console.log(nome2);
name2='Carlos'; //permite mudar o valor
//const
//const nome3;//não permite variável indefinida.
const nome3='Nogueira';
//nome3='Alves';//não permite mudar o valor.
console.log(nome3);

