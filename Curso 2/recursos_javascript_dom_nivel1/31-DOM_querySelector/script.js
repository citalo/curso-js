// APLICAR ESTILOS INLINE COM JAVASCRIPT
//a busca só ocorre em style inline, ou seja, no body
//document.querySelector ("h1").style.color = "red"

//ou

let el =document.querySelector("h1")//mesmo resultado da expressão passsada
el.style.color = "#f00" //ou "red" ou rgb(255, 0, 0)
el.style.backgroundColor = "yellow" //referencia não segue a mesma sintaxe

//Busca em todo o documento e feito pelo getComputedStyle(variável)

let el =document.querySelector("p")//no head
const estilos = window.getComputedStyle(el)
console.log(estilos.getPropertyValue("color"))