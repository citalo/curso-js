//OBJETOS
//para criar objetos usa-se {}, parecido aos array com [].
const pessoa1 = {
    nome: 'Carlos Italo',//Dentro de {} criam-se os atributos seguido de (:) dois pontos.
    sobrenome: 'Alves',
    idade: 36,
    Casado: true, 
};
//Acessar o atributo:

console.log(pessoa1.nome);//acessa os atributos através de (.) ponto.
console.log(pessoa1.idade);

//criar objetos a partir de funções (fábrica de objetos):

function criaPessoa (nome, sobrenome, idade, casado)/*parametros*/{
    return {nome, sobrenome, idade, casado};//{} para objeto.
}

const pessoa2 = criaPessoa('Raissa','Borges', 33, true);
console.log(pessoa2.idade);
const pessoa3 = criaPessoa('Ana','Nogueira', 2, false);//argumentos
console.log(pessoa3.casado);
console.table(pessoa3);
const pessoa4 = criaPessoa('Raquel', 'Borges', 36, false);
console.log(pessoa4.sobrenome);
console.table(pessoa4);

//Pode colocar funções dentro do objeto:

const pessoa5 = {
    nome: 'Letícia',
    sobrenome: 'Guerra',
    idade: 20,
    casado: false,

    fala() {
        console.log(`${this.nome} ${this.sobrenome}, a minha idade é ${this.idade}!`);
    },
    incrementaIdade() {
        this.idade++;
    }
}

pessoa5.incrementaIdade();
pessoa5.fala();//puxa o console log
pessoa5.incrementaIdade();
pessoa5.fala();
pessoa5.incrementaIdade();
pessoa5.fala();
