//fecth - responsável por fazer requisições via http por API.
//assíncrona não espera a resposta do server, evita travamentos, porém não é uma resposta segura.
let result = ["Italo"]

fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => result = json)

for (const item of result) {
    console.log(item);
}
//Antes da resposta do servidor, o código é processado independente da sequencialidade.
//Para fazer com que "for" aguarde a resposta do servidor deve ser posto
//da seguinte forma:
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        result = json;
        for (const item of result){
        console.log(item.name)}
        });