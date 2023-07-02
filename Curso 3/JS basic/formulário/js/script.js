function meuEscopo () {

    const formulario = document.querySelector('#form');//busca dados no html/seletor CSS
    const resultado = document.querySelector('#resultado');
    const pessoas = [];//o envio que criará o array com objeto.
   
    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');//buscando elementos do <form>, não do document inteiro.
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,//chave: valor
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        })

        console.table(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} pesa ${peso.value}Kg e mede ${altura.value}.</p>`;

    }

    formulario.addEventListener('submit', recebeEventoForm);

}
meuEscopo();