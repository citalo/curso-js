// DESATIVAR A FUNÇÃO NATIVA DE UM LINK
document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault()
})


// DESATIVAR A SUBMISSÃO DO FORMULÁRIO
document.querySelector('input[type="submit"]')
.addEventListener('click', (event)=>{
    //validação do formulário
    event.stopPropagation() //para o evento a propogação do addlistener abaixo

    event.preventDefault()
})

// CUIDADO COM A PROPAGAÇÃO!

document.querySelector('.caixa').addEventListener('click', () => {
    console.log('div')
})