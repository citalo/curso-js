/*Os pontos representam ação no elemento (propriedade, método...) anterior, muitas vezes o que 
digitamos é na verdade a ponta de um atalho, como podemos observar:*/

window.document.body.innerHTML = 'Um novo texto';/*window pode ser ocultado, document é
uma propriedade que não contém no Node.*/
document.body.innerHTML = 'Outro texto <br>';/* colocando o mesmo método
o JS substitui o anterior.*/
document.body.innerHTML += 'O sinal de <strong>+=</strong> incrementa, <mark>inclui novo texto</mark> pelo mesmo método.';


