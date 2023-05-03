// ARRAYS

// -------------------------------
// até agora...
// -------------------------------
//let nome1 = "joao"
//let nome2 = "ana"
//let nome3 = "carlos"

// com um array...
let nomes = ["joao", "ana", "carlos"]

// -------------------------------
// apresentar dados de um array
// -------------------------------
 console.log(nomes)      // todos os elementos
 console.log(nomes[1])   // ana
 console.log(nomes[0])    // em arranjo o index s inicia pela posição 0
 console.table(nomes)    //apresenta array em forma de tabela

// -------------------------------
// alterar dados de um array (substituição)
// -------------------------------
 nomes[1] = "maria"
 console.table(nomes)