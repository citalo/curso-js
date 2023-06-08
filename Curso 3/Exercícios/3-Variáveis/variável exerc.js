//Luiz Otávio Miranda tem 30 anos, pesa 84 kg
//tem 1.8 de altura e seu IMC é de  25.925925
//Luiz Otávio nasceu em 1980.
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let IMC;
// Calcule o IMC: 
//peso/(altura*altura);

IMC = peso/(altura*altura);
console.log(IMC);
//template string: (forma ideal de incluir variáveis em strings)
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
//ou
console.log(nome+' '+sobrenome+' tem '+idade+' anos, pesa '+peso+' kg');
console.log('tem', altura,'de altura e seu IMC é de', IMC);
console.log(nome, "nasceu em 1980.");