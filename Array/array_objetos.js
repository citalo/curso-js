//array de objetos
const cars = [ 
    {
    id: 1,
    name: "fiat",
    },
    {
    id: 2,
    name: "toyota",
    },
    {   
     id: 3,
    name: "nissan",
    }
];

//acessar individualmente

console.log(cars[0].name);
console.log(cars[2].name);

console.log("xxxxxxx")//acessar via loop

for (const car of cars) {
    console.log(car.name);
}

//adicionar um objeto dentro do array

cars.push({
    id:4, name: "Jaguar"
    }
);

console.log(cars);