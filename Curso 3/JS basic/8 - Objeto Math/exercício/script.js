const numero = prompt('Digite um número:');
const numeroBrasil = Number(numero.replace(",","."));
const numeroTitulo = document.getElementById('numero-titulo');
const texto =  document.getElementById('texto');

numeroTitulo.innerHTML = `O número que você digitou foi: ${numero}`;
texto.innerHTML = "";
texto.innerHTML += `<p>Seu número -2 é <strong>${Number((numeroBrasil.toFixed(6)))-2}</strong>.</p>`;// Number(toFixed) para evitar a imprecisão
texto.innerHTML += `<p>Seu número +2 é <strong>${Number((numeroBrasil.toFixed(6)))+2}</strong>.</p>`;
texto.innerHTML += `<p>A raiz quadrada é <strong>${numeroBrasil**(1/2)}</strong>.</p>`;
texto.innerHTML += `<p>${numero} é um número inteiro: <strong>${Number.isInteger(numeroBrasil)}</strong>.</p>`;
texto.innerHTML += `<p>${numero} é um NaN: <strong>${Number.isNaN(numeroBrasil)}</strong>.</p>`;
texto.innerHTML += `<p>Arrendondando para baixo: <strong>${Math.floor(numeroBrasil)}</strong>.</p>`;
texto.innerHTML += `<p>Arrendondando para cima: <strong>${Math.ceil(numeroBrasil)}</strong>.</p>`;
texto.innerHTML += `<p>Arrendondando para o mais próximo: <strong>${Math.round(numeroBrasil)}</strong>.</p>`;
texto.innerHTML += `<p>${numero} com duas casas decimais: <strong>${numeroBrasil.toFixed(2)}</strong>.</p>`;


