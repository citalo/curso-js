/* Em JS tudo pode ser analisado logicamente em relação aos operadores
lógicos, para além dos booleanos*/

/*
valores avaliados em falso: 0, false, falsy, null, NaN, undefined.
valores avaliados em verdadeiro : todos os diferentes acima.
*/


//&& (*)
console.log("Carlos Italo" && 12 && true);//tipos diferentes retorna o último.
console.log('Carlos Italo' && false && 10);//Em lógica todo (0*x = 0);
console.log('Carlos Italo' && true && 'Maria');
console.log('Carlos Italo' && 0 && 'Maria');//o 0 comporta-se como false;
console.log('Carlos Italo' && undefined && 'Maria');
console.log(' ');

//|| (+)
console.log("Carlos Italo" || 12 || true);//apresenta o primeiro true.
console.log('Carlos Italo' || false || 10);
console.log('Carlos Italo' || true || 'Maria');
console.log('Carlos Italo' || 0 || 'Maria');
console.log('Carlos Italo' || undefined || 'Maria');
console.log(0 || false || undefined || null || NaN);//busca o true até o final.
console.log(' ');

//cria-se uma estrutura condicional sem utilizar if ou for.

function falarOi(){
    return console.log('oi');
};

const naoBoca = false;//valores negativos seriam ativados.
const boca = true

console.log(naoBoca && falarOi);//não ativa a função.
console.log(boca && falarOi);//ativa a função.

console.log(" ");

//Aplicando cores no site pelo usuário;

let corUsuario;
const corPadrao = 'Branco';

console.log(corUsuario||corPadrao);//Como o usuário não selecionou uma cor o padrão será ativado.
corUsuario = 'Preto';
console.log(corUsuario||corPadrao);//Cor selecionada pelo usuário.
