const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
e.preventDefault();
const inputPeso = e.target.querySelector('#Peso');
const inputAltura = e.target.querySelector('#Altura');

const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);

if (!peso) {
    setResultado ('Peso inválido', false);
    return; }

if (!altura) {
    setResultado ('Altura inválida', false);
    return;
}

const imc = getImc (peso, altura);
const nivelimc = getNivelImc(imc);

console.log(imc, nivelimc)

const msg = `Seu imc é ${imc} (${nivelimc})`

setResultado(msg, true);
}
);

function getNivelImc (imc) {
 const nivel = ['Abaixo do peso', 
 'Peso mormal', 'Sobrepeso',
  'Obesidade grau 1',
 'Obesidade grau 2','Obesidade grau 3'];

 if (imc >= 39.9) {
   return nivel  [5]
 } else if (imc >= 34.9){
    return nivel  [4]

 
 } else if (imc >= 29.9){
    return nivel  [3]

 }
  else if (imc >= 24.9){
    return nivel  [2]

 }
  else if (imc >= 18.5){
    return nivel  [1]

 } else if (imc < 18.5) {
     return nivel[0];
 }
 
}

function getImc (peso, altura) {
const imc = peso / altura ** 2;
return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
const resultado = document.querySelector('#res')
resultado.innerHTML = '';

const p = criaP()
p.innerHTML = msg;

if (isValid) {
    p.classList.add('paragrafo-resultado');
} else {
    p.classList.add('bad')
}
resultado.appendChild(p);
}

