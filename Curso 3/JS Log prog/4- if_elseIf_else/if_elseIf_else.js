//Estruturas Condicionais - if, else if e else/
/*
if (condição){
    execução de um código  qualquer.
}
O if pode ser usado sem acompanhar o if else ou o else.
Else precisa de um if antes.
Posso ter diversos else if na estrutura.
Só posso ter um else.
Podemos utilizar apenas o if e finalizar com else.
Se houver mais de uma condição verdadeira, apenas a primeira é executada.
*/

const hora = 12;

if(hora >= 0 && hora < 12) {
    console.log('Bom dia!');
}else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!');
}else if (hora >= 18 && hora < 24){
    console.log('Boa noite!');
}else {
    console.log('Boa sorte!')
}