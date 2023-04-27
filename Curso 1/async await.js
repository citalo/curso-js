//async await - é uma forma mais fácil de descrever as fecht assincronas

//fecht
//fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//      .then(json => {
//        result = json;
//        for (const item of result){
//        console.log(item.name)}
//        });

//async await

async function carregar() {
const response = await fetch('https://jsonplaceholder.typicode.com/users');
const data= await response.json();

console.log(data);//pode substituir pela função for acima, o resultado será para nomes.
}

carregar ();