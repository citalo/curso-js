/* 
OBJETIVO:
Ao clicar no botão, alterar a cor de fundo da caixa para aquamarine,
apresentar o texto 'clique' na consola e
remover o evento click do botão
*/

let caixa = document.querySelector(".caixa")//busca similar ao CSS
let botao = document.querySelector ("button")

function executar (event){
    caixa.classList.add('cor-fundo-caixa')
    console.log('clique')
    botao.removeEventListener('click',executar)
}

botao.addEventListener('click',executar)


