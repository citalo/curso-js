const nome = "Italo"

//if (nome == "Italo") {console.log ("É um homem estudioso")} //não utilizar apenas = pois não é igualdade, mas atribuição.
//else if (nome == "Valdenilson") {console.log ("É um bom amigo")}
//else {console.log ("Desconhecido")}

//O switch é mais utilizado quando existem um gama maior de condições.
switch (nome) {
    case "Italo": console.log ("É um homem estudioso"); break;
    case "Valdenilson": console.log ("É um bom amigo"); break;
    default: console.log ("Desconhecido")
}