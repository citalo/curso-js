//estrutura condicional substituida pelo operador ternário
let media = 7.6;
let resultado;
//if(media<7){resultado = "reprovado"}
//else {resultado = "aprovado"}
//console.log(resultado)
//O operador ternário substituem o if e else em determinadas situações
resultado = media >= 7 ? "aprovado" : "reprovado";//: substitui o senão ou senão se
console.log (resultado);

//pode tornar mais complexo como vários ?(se), porém deve ser evitado
media= 6.5;
resultado = 
    media >= 7 ? "aprovado" : media<=7&&media>=6.5 ? "recuperação" : "reprovado";

    console.log(resultado);