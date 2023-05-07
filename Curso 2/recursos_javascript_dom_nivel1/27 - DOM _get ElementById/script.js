console.log(document.getElementById('noticia'))//apresentável no brownse
console.log(document.getElementById('noticia').id)//busca apenas a relação com o id
//É também possível fazer:
let algo = document.getElementById ('titulo')
console.log(algo)// faz busca sobre o título
console.log(algo.id)
console.log(algo.classList)
console.log(algo.className)
console.log(algo.innerHTML)//apresenta as tags html, se houver, no decorrer do text.
console.log(algo.innerText)//ignora as tags.
console.log(algo.textContent)//mesmo resultado do innertext.