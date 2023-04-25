const media = (10+3+7+6)/4;
console.log(media);
let resultado;

if(media==10) {resultado = "aluno aprovado com nota 10"}
else if(media>=7&&media<10){resultado = "aluno aprovado"}
else if(media>=6.5&&media<7) {resultado = "aluno em recuperação"}
else {resultado = "aluno reprovado"}//senão não tem condições e é usado para qual valor diferente das condições.

console.log(resultado)

console.log("xxxxxxxxxxxxx");//utilizando console.log em escopo local (truthy e falsy)

if("") {console.log("aspas duplas vazias é truthy")}
else {console.log("aspas duplas vazias é falsy")}

console.log("xxxxxxxxxxxxx")

if(0) {console.log("0 é truthy")}
else {console.log("0 é falsy")}

