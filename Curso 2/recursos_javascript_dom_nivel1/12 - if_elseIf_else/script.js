let condicao_do_tempo = 'sol' //declaração de variável

if(condicao_do_tempo == 'sol'){
    console.log('Está bom tempo para um passeio.')
} else {
    console.log('O tempo não está bom.')
}

/*SE (variável [operador] string,num,bool) {
    formula-se o que acontecerá
} SENÃO {
    formula o fato contrário
}*/

// else if corresponderia a um novo SE, importante observar que SE inicia e ELSE fecha.
let avaliação = 0

if(avaliação==1){
    console.log("péssimo resultado.")
} else if (avaliação==2){
    console.log("mau resultado.")
} else if (avaliação==3){
    console.log("médio resultado.")
} else if (avaliação==4){
    console.log("bom resultado.")
} else if (avaliação==5){
    console.log("ótimo resultado.")
} else {
    console.log("seu resultado foi zero.")
}
