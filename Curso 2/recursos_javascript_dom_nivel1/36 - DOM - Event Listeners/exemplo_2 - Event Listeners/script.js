let botao = document.querySelector('button')

// podemos adicionar multiplos event listeners ao mesmo evento de um elemento

botao.addEventListener('click', function(){
    document.querySelector('h1').textContent = "Texto alterado"
})// addEventListeners('tipo de evento', o que ele efetuará)

botao.addEventListener('click', function(){
    console.log('clique')
})
// diferente do event handlers, o event listeners permite várias execuções sem sobreposição