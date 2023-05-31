// INTRODUÇÃO À VALIDAÇÃO DE FORMULÁRIOS

document.formulario_login.addEventListener('submit',(event) =>{

    //buscar valores dos campos
    let usuario = event.target.usuario.value
    let senha = event.target.senha.value
    let submit = true

    //validar usuário

    if(usuario === "") {
        submit = false

        //error
        let tmp = document.querySelector('input[name="usuario"]')
        tmp.insertAdjacentHTML ("afterend", "<span class='error'>Usuário é obrigatório</span>")
    }
    //validar senha

    if(senha === "") {
        submit = false

        //error
        let tmp = document.querySelector('input[name="senha"]')
        tmp.insertAdjacentHTML ("afterend", "<span class='error'>senha é obrigatória</span>")
    }

    //verificar se o formulário pode ser submetido

    if (!submit){
        event.preventDefault()

        setTimeout(() =>{
            document.querySelectorAll(".error").forEach(e => e.remove())

        },2000)//defindo tempo das mensagens visíveis
    }
})//quando ocorrer o submit
