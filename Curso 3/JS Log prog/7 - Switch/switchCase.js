//Switch/Case

const data = new Date('1987-12-10 06:00');//ano-mês-dia semana 0-6
const diaDaSemana = data.getDay();
let semanaText;
/*
if (diaDaSemana===0){
    semanaText = 'domingo';
} else if(diaDaSemana===1) {
    semanaText = 'segunda';
} else if(diaDaSemana===2) {
    semanaText = 'terça';
} else if(diaDaSemana===3) {
    semanaText = 'quarta';
} else if(diaDaSemana===4) {
    semanaText = 'quinta';
} else if(diaDaSemana===5) {
    semanaText = 'sexta';
} else {
    semanaText = 'sábado';
}
console.log(diaDaSemana, semanaText);
*/
/*
switch (diaDaSemana) {
    case 0:
        semanaText = 'domingo';
        break;
    case 1:
        semanaText = 'segunda';
        break;
    case 2:
        semanaText = 'terça';
        break;
    case 3:
        semanaText = 'quarta';
        break;
    case 4:
        semanaText = 'quinta';
        break;
    case 5:
        semanaText = 'sexta';
        break;
    case 6:
        semanaText = 'sábado';
        break;
    default:
        semanaText = 'inexistente';
}

console.log(semanaText);
*/
function getDayWeek () {

    switch (diaDaSemana) {
        case 0:
            semanaText = 'domingo';
            return semanaText;
        case 1:
            semanaText = 'segunda';
            return semanaText;
        case 2:
            semanaText = 'terça';
            return semanaText;
        case 3:
            semanaText = 'quarta';
            return semanaText;
        case 4:
            semanaText = 'quinta';
            return semanaText;
        case 5:
            semanaText = 'sexta';
            return semanaText;
        case 6:
            semanaText = 'sábado';
            return semanaText;
        default:
            semanaText = 'inexistente';
            return semanaText;
    }
}

console.log(getDayWeek());
