// function tradicional

function soma(n1,n2,n3) {
    return n1+n2+n3;
}

console.log (soma(1,2,3));

console.log ("xxxxxxxxxxxxxxxx")

// rest_parameters (...)
function soma(...parametro) {
console.log (parametro)
}

console.log(soma(1,2,3,4,5,6))

//parametro fica ilimitado pode ser implementado na sua função
console.log ("xxxxxxxxxxxxxxxx")

function sum(...args) {
    let total = 0;
    for (const numero of args) {
    total += numero;
    }
    return total;
}
console.log(sum(1,2,3,4,5,6,7,8,9)) //incrementação após a função diferente
//do modelo tradicional.