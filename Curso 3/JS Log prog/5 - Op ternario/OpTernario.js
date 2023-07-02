//Operador ternário
// variável = (condição) ?(resultado se) :(resultado senão);

const pontucao = 999;
/*
if (pontucao >= 1000) {
    console.log ('usuário é VIP.');
}else {
    console.log('usuário normal');
}
*/
const levelUser = (pontucao >= 1000) ? ('usuário é VIP') : ('usuário normal');
console.log(levelUser);