// INTRODUÇÃO À VALIDAÇÃO DE FORMULÁRIOS

document.formulario_login.addEventListener('submit', (event) => {

    // captar os valores dos campos
    let usuario = event.target.usuario.value
    let senha = event.target.senha.value
    let submit = true;

    // validar se usuário está preenchido
    if (usuario === "") {
        submit = false;

        // erro
        let tmp = document.querySelector('input[name="usuario"]')
        tmp.insertAdjacentHTML('afterend', '<span class="error">Usuário é de preenchimento obrigatório</span>')
    }

    // validar se senha está preenchida
    if (senha === "") {
        submit = false

        // erro
        let tmp = document.querySelector('input[name="senha"]')
        tmp.insertAdjacentHTML('afterend', '<span class="error">Senha é de preenchimento obrigatório</span>')
    }

    // verifica se o formulário está bem preenchido
    if (!submit) {
        event.preventDefault()

        setTimeout(() => {
            document.querySelectorAll(".error").forEach(e => e.remove())
        }, 2000)
    }
})