//Concatenando array

const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 = array1.concat(array2); //junta dois arranjos
console.log(array3);

//operador spread em array

const array4 = [...array1,...array2]; //mesmo resultado do anterior
console.log(array4);

//operador spread unindo objetos no mesmo.

const pessoa = {
    id:1,
    nome: "Italo",
    idade: 36,
}
const pessoaDados = {
    address: "casa 03",
    cidade: "Fortaleza",
}

const pessoaFull = {
    ...pessoa,
    ...pessoaDados,
}

console.log(pessoaFull);