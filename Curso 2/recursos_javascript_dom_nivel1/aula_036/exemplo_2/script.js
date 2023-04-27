let botao = document.querySelector('button')

// podemos adicionar multiplos event listeners ao mesmo evento de um elemento

botao.addEventListener('click', function(){
    document.querySelector('h1').textContent = "Texto alterado"
})

botao.addEventListener('click', function(){
    console.log('clique')
})