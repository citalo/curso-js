/*
Booleanos

true = 1
false = 0

OPERADORES LÓGICOS

&& -> AND -> (multiplicação)-> 
true && true = true (1x1=1)
true && false = false (1x0=0)
false && false = false (0x0=0)

|| -> OR -> (soma)->
true || true = true (1+1=1)
true || false = true (1+0=1)
false || false = false (0+0=0)

! -> NOT -> (inversão)->
!true = false
!false = true

*/

const logAnd = true && !false;//1x1=1
console.log(logAnd);

const expLog = (10<0) && (11>2);//0x1=0
console.log(expLog);
const expLog1 = (10<0) || (11>2);//0+1=1
console.log(expLog1);

//Exemple prático

const usuario = 'Carlos';
const senha = '1234';

const openSystem = usuario==='Carlos' && senha ==='1987'//1x0=0
console.log(openSystem);