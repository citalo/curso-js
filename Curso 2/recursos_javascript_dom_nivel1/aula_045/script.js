// este código vai ser executado antes dos elementos do body existire,
document.querySelector("button").addEventListener('click', () => {
    document.querySelector('h1').innerText = "Texto do título alterado"
})