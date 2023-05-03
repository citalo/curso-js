// INSTRUÇÃO CONDICIONAL SWITCH ... CASE

// Alternativa ao If ... Else If ... Else

// --------------------------
// Estrutura
// --------------------------
//let variável = valor (ou const variável = valor)

//    switch (valor) {
//    case 1:
          //código para valor = 1
//         break

//     case 2:
//         // código para valor = 2
//         break

//     default:
//         // código para outro valor
//         break
// }
// o default seria um else na função Se, não é obrigatório em sintaxe, mas em boa prática.
// --------------------------
// exemplo 1
// --------------------------
 let avaliacao = 3
 switch (avaliacao) {
     case 1:
         console.log("Resultado mau")
         break
     case 2:
         console.log("Resultado insuficiente")
         break
     case 3:
         console.log("Resultado positivo")
         break
     case 4:
         console.log("Resultado bom")
         break
     case 5:
         console.log("Resultado excelente")
         break
     default:
         console.log("Avaliação inválida")
         break
 }

// --------------------------
// exemplo 2 - break
// --------------------------
// let valor = 10
// switch (valor) {
//     case 10:
//         console.log('Valor igual a 10')
//     case true:
//         console.log('Valor verdadeiro')
// }
// break é fundamental
// --------------------------
// exemplo 3 - maior que
// --------------------------
// let valor = 10
// switch (true) {
//     case (valor < 10):
//         console.log('Valor inferior a 10')
//         break
//     case (valor > 10):
//         console.log('Valor superior a 10')
//         break
//     default:
//         console.log('Valor igual a 10')
//         break
// }

// --------------------------
// exemplo 4 - vários case
// --------------------------
 let nome = "joao"
 switch (nome) {
     case "joao":
     case "joaquim":
     case "joana":
     case "josé":
         console.log('O nome é começa com a letra J')
         break
     case "fernando":
         console.log('O nome começa com a letra F')
         break

     default:
         console.log('Não foi possível identificar a letra inicial')
         break
 }