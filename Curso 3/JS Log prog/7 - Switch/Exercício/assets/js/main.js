const h1 = document.querySelector('.container h1');
const data = new Date();
;

function getDayWeek () {
let diaDaSemana = data.getDay()
    switch (diaDaSemana) {
        case 0:
            semanaText = 'domingo';
            return semanaText;
        case 1:
            semanaText = 'segunda-feira';
            return semanaText;
        case 2:
            semanaText = 'terça-feira';
            return semanaText;
        case 3:
            semanaText = 'quarta-feira';
            return semanaText;
        case 4:
            semanaText = 'quinta-feira';
            return semanaText;
        case 5:
            semanaText = 'sexta-feira';
            return semanaText;
        case 6:
            semanaText = 'sábado';
            return semanaText;
        default:
            semanaText = 'inexistente';
            return semanaText;
    }
}

function getMonthYear () {
let mes = data.getMonth()
    switch (mes) {
        case 0:
            mesText = 'janeiro';
            return mesText;
        case 1:
            mesText = 'fevereiro';
            return mesText;
        case 2:
            mesText = 'março';
            return mesText;
        case 3:
            mesText = 'abril';
            return mesText;
        case 4:
            mesText = 'maio';
            return mesText;
        case 5:
            mesText = 'junho';
            return mesText;
        case 6:
            mesText = 'julho';
            return mesText;
        case 7:
            mesText = 'agosto';
            return mesText;
        case 8:
            mesText = 'setembro';
            return mesText;
        case 9:
            mesText = 'outubro';
            return mesText;
        case 10:
            mesText = 'novembro';
            return mesText;
        case 11:
            mesText = 'dezembro';
            return mesText;
        default:
            mesText = 'inexistente';
            return mesText;
    }
}

function criaData() {
    const dataCompleta = `${getDayWeek()}, ${data.getDate()} de ${getMonthYear()} de ${data.getFullYear()}.`;
    return dataCompleta;
}

h1.innerHTML = criaData();
