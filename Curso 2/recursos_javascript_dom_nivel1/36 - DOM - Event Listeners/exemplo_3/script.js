// DEFINIR UM EVENT LISTENER

// -------------------------------------------------------
// function evento(){
//     document.querySelector("h1").textContent = "Novo texto"
// }

// let botao = document.querySelector("button")
// botao.addEventListener('click', evento) //não é onclick, onfocus... mas click, focus...

// -------------------------------------------------------
// let botao = document.querySelector("button")
// botao.addEventListener('click', function() {
//     console.log('clique') //forma mais utlizada, com funções no evento
// })

// -------------------------------------------------------
// let botao = document.querySelector("button")
// botao.addEventListener('click', () => console.log('clique'))
// Essa forma é mais sofisticada com uso de arrow function
// -------------------------------------------------------
// document.querySelector("button").addEventListener('click', (e) => {
//     console.log('clique') //escreve texto no console 
//     e.target.textContent = "Alterado" //altera texto do botão
//     document.querySelector("h1").textContent = "Texto alterado" //altera texto do head
// })