//Objetos
const car = {
    name: "Corola",
    color: "blue",
    fabrication: 2019,
    "size-car": "4 metros",
    "air-bag" : true,
}

//acessar propriedades de um objeto
console.log(car.name);
console.log(car["size-car"]) //forma de acessar propriedades do objeto como string
console.log("--------------------");
//modificar o valor de uma propriedade
car.name = "Honda Civic";
console.log(car.name);
console.log("--------------------");
//criar uma propriedade
console.log(car.age);
car.age = "5 anos"; //nova propriedade
console.log(car.age);
console.log("--------------------");
//deletar uma propriedade
delete car["size-car"];
delete car.age;
console.log(car["size-car"]);
console.log(car.age);
console.log("--------------------");
//verificar a existência de uma propriedade com esse nome
if ("name" in car) {
    console.log("name é uma propriedade de carro");    
}
else 
{console.log("nome não é uma propriedade de carro")
}
