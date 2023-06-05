// este código vai ser executado antes dos elementos do body existire,
/*document.querySelector("button").addEventListener('click', () => {
    document.querySelector('h1').innerText = "Texto do título alterado"
})*/
//Primeira forma
/*document.addEventListener('readystatechange', (event)=> {
    if(event.target.readyState === 'complete') {
        document.querySelector("button").addEventListener('click', () => {
            document.querySelector('h1').innerText = "Texto do título alterado"
        })
    }
    
})*/
//Segunda forma
document.addEventListener('DOMContentLoaded', ()=> {
        document.querySelector("button").addEventListener('click', () => {
            document.querySelector('h1').innerText = "Texto do título alterado"
        })
})