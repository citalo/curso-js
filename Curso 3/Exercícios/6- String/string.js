////String

//let UmaString = "Um 'texto'.";// mostra aspas simples.
//console.log(UmaString);
//UmaString = 'Um "texto".';// mostra aspas duplas.
//console.log(UmaString);
//UmaString = "Um \"texto\".";
//console.log(UmaString);// utilizando aspas duplas dentro de aspas duplas.
//console.log("");
////String são indexados e tem sua posição dentro da memória, iniciando de 0.
////índice             012345678
//let segundaString = "Um texto."
//console.log(segundaString[3]);//mostra o caractere pelo seu índice.
//console.log(segundaString[2]);//espaço também é um caracter.
//console.log(segundaString[12]);//valor indefinido quando não tiver elemento nessa posição.
//console.log(segundaString[-1]);
//console.log(segundaString[8]);
//console.log(segundaString[0]);


/*No JS quando vem o "." após um elemento reservado, geralmente é um método para
manipulação (console.log, document.write...), nas string isso também ocorre:*/

//let terceiraString = "Um texto";
//console.log(terceiraString.charAt(6));//caractere em... pega o caractere pela posição.
////outra forma de encontrar o caractere pelo índice:
////console.log(terceiraString[6]);
//console.log(terceiraString.concat(" em um lindo dia."));//acrescenta a string.
////outras formas de concatenar:
////console.log(terceiraString, "em um lindo dia.");
////console.log(`${terceiraString} em um lindo dia.`);
//console.log(terceiraString.indexOf("texto"));//diz o index que inicia a string pesquisada.
////lembrar que o JS é sensitive case, caso não encontre a palavra irá retornar valor negativo.
//console.log(terceiraString.indexOf("t",4));//mesmo caso acima, porém a partir da posição
////4, perceba que exsite também um "t" na posição 3 que por isntrução não é buscado.
//console.log(terceiraString.lastIndexOf("t",4));//É um indexof reverso.
//console.log(terceiraString.search('t'));//similar ao indexof,como math, o search aceita regex.
//console.log(terceiraString.replace('Um','Outro'));//substitui o primeiro pelo segundo.
////cuidado com o case sensitive!!
//index             0123456789...
let quartaString = 'O rato roeu a roupa do rei de Roma.'
console.log(quartaString.replace("r",'#'));
console.log(quartaString.replace(/r/,'#'));//Com expressão regulares (regex).
console.log(quartaString.replace(/r/g,'#'));//substitui todos os caracteres.
console.log(quartaString.length);//número de index na string, incluindo o zero
//portanto, 35 posições irá do index 0 - 34.
console.log(quartaString.slice(2,5));//fatia a string dentro do intervalo index 2-5
console.log(quartaString.slice(2,6));//na fatia não inclui o último index.
console.log(quartaString.slice(-5));//fatia, como exclusão do index, a partir do final.
//console.log(quartaString.indexOf('Roma'));//string tem 35 e "Roma" corresponde aos 5 ultimos
//portanto -5 do slice.
console.log(quartaString.slice(-5, -1));//retira o intervado do index 31 ao 34, excluindo o '.'.
console.table(quartaString.split(' ')); //particiona a string em array quando ocorrer o '' espaço.
console.table(quartaString.split('r')); //particiona a string em array a partir do "r".
console.table(quartaString.split(' ', 2));//limita o nº de elementos no array.
console.log(quartaString.toUpperCase());//coloca em maiúsculo.
console.log(quartaString.toLowerCase());//coloca em minúsculo.
