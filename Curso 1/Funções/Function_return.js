function numbers (n1,n2,n3) {
    const sum = n1+n2+n3;
    return sum; //retorna para quem o chama
}
function media (sum) {
    const studant = sum/4;
    return studant;
}

const studantscore= numbers (10,10,10);

console.log (media(studantscore)) //return studant
