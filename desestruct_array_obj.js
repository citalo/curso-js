//forma tradicional deixa o código extenso.
const numero = [1,2,3,4,5,6]

const posicao1 = numero[0];
const posicao2 = numero[1];
const posicao3 = numero[2];
const posicao4 = numero[3];
const posicao5 = numero[4];
const posicao6 = numero[5];

console.log(posicao1,posicao2,posicao3,posicao4,posicao5,posicao6);
console.log("xxxxxxxxxxxxxxx");

//desestruturando uma array (aproveitando a array a const acima)
const [primeira,segunda,terceira,...resto]= numero;
console.log(primeira,segunda,terceira,...resto);//utilizando os paramaters
//mesmo resultado acima porém com menos linhas de códigos.
console.log("XXXXXXXXXXXXXXXX");

const pessoa={
    nome:"Italo",
    idade: 36,
    cidade: "Fortaleza",
}
const meunome = pessoa.nome;
const minhaidade = pessoa.idade;
const minhacidade = pessoa.cidade;
console.log(meunome,minhaidade,minhacidade);
//Desestruturação de objetos, utilizando poucas linhas para o mesmo resultado.
const {nome,idade,cidade}=pessoa;
console.log(nome,cidade,idade);