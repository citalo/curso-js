//Objeto Date:
//variável = new Date() //É uma função construtora.
//data no JS é contado por milesegundos (segundos*1000).

let data = new Date();
console.log(data);//horário atual.
data = new Date(0);//new Date(0) = 01/01/1970, timestamp unix.
//new Date (-valores negativos) = antes de 01/01/1970.
console.log(data.toString());//GMT de brasília 31/12/1969 21:00.
const tresHoras = 3*60*60*1000;//unidade de tempo é em milésimo.
data = new Date(tresHoras);// do timestamp no EUA.
console.log(data.toString())//a função toString traz para o padrão BR.
const Umdia = 24*60*60*1000
data = new Date(Umdia);
console.log(data);//fuso EUA
data = new Date(2023,3,25,19,17,10,998);// meses de 0-11, 0 jan e 11 dez. 
console.log(data);//horário difere por este está no fuso americano 3 horas de diferença.
console.log(data.toString())//BR.
data = new Date('10-12-1987 06:00:45'); //em string meses 1-12;(mais utilizado).
console.log(data);
console.log(data.toString());
data = new Date();
//pegando outros valores:
console.log('dia',data.getDate());//recebe o dia.
console.log('mes',data.getMonth());//0 -11
console.log('ano',data.getFullYear());
console.log('hora',data.getHours());
console.log('min',data.getMinutes());
console.log('seg',data.getSeconds());
console.log('ms',data.getMilliseconds());
console.log('dia semana',data.getDay());//0-6
//muito utilizado em banco de dados.
console.log(Date.now());
console.log(new Date(Date.now()).toString());//date now em fuso Br.

//Prática:
function zeroAEsquerda (num) {
        return (num >= 10) ? num : `0${num}`;
}

function formatDate (date){
    const dia = zeroAEsquerda(date.getDate());//entrelaçando as funções.
    const mes = zeroAEsquerda(date.getMonth()+1);
    const ano = zeroAEsquerda(date.getFullYear());
    const hora = zeroAEsquerda(date.getHours());
    const minuto = zeroAEsquerda(date.getMinutes());
    const segundo = zeroAEsquerda(date.getSeconds());
    const milesegundo = zeroAEsquerda(date.getMilliseconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}:${milesegundo}.`
}

const date = new Date();
const dateBrazil = formatDate (date);
console.log(dateBrazil);

