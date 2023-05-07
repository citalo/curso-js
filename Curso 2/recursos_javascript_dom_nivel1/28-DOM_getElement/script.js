/*
document.getElementsByClassName()
document.getElementsByName()
document.getElementsByTagName()
*/

let e = document.getElementsByClassName("outra-noticia")
    console.log(e)
e[2].innerText = "nova noticia" //altera o texto relacionado ao index(posição)

let e = document.getElementsByName("text-usuario")
e[0].value = "João" 

let e = document.getElementsByTagName("div")
console.log(e)
