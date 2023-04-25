//Propriedades dos Array:
const peoples = ["Italo", "Camila","Herbert"];
//*length - tamanho do array
console.log(peoples.length);
//*filter - filtra array por condição
const charPeoples = peoples.filter ((item) =>item.length>=6);
console.log (charPeoples)// apresentará length para o item com mais de 6 caracteres.
//*find - encontra elemento por condição
const myname = peoples.find((item)=>item=="Italo");
console.log(myname);//se não encontrasse um nome da lista seria undefined
//*findIndex - encontra o indice de um elemento
const index = peoples.findIndex((item)=>item=="Italo");
console.log(index);////se não encontrasse um nome da lista seria -1
//*forEach - cria loop para percorrer array, auxiliado pela função mostra elemento e posição.
function position(item,index) {
    console.log(item,index)
}
peoples.forEach(position);
//*map - percorre todas as posições do array, criando um novo array.
const studants = peoples.map ((peoples)=>peoples);
console.log (studants,"estudantes");
//*push - adiciona um novo elemento
console.log(peoples[3],"elemento 4");
peoples.push("Jorge");
console.log(peoples[3],"elemento 4");
//*pop - remove o último item
peoples.pop();
console.log(peoples[2],"elemento 3");
//*splice - remove um item específico
console.log(peoples,"antes do splice");
peoples.splice (0,1);//(a,b) a posicão que inicia a remoção, b quantos serão removidos
console.log(peoples,"depois do splice");
//*reverse - inverte as posições dos elementos
console.log(peoples);
peoples.reverse();
console.log(peoples);




