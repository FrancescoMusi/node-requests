/*
 * BASI DI JAVASCRIPT
*/

/*
 * if, else, else if
*/

let a = 3; // le variabili si definiscono con let nomevariabile

if (a === 3) {
  // qualcosa
} else if (a === 4) {
  // se.. altro
} else {
  // altro
}

console.log("ciao"); // equivale a print, manda in output nel terminale

/*
 * while, for
*/

while (a !== 3) {
  // qualcosa
}

for (let o = 0; o < 10; 0++) {
  console.log(o);
}

a = ["ciao", "come", "stai"];

for (let i in a) {
  console.log(a[i]);
  // in questo caso i è l'indice di a, che aumenta ogni volta
}

/*
 * definire una funzione
*/

// primo metodo (OLD), fa schifo imparate il secondo
function functionName_1 (arguments) {
  console.log(arguments);
}

// in questo caso costante perchè la variabile functionName non cambierà
// viene chiamata arrow function, imparate queste.
const functionName_2 = (arguments) => {
  console.log(arguments);
}

// richiamare una funzione
functionName_2("bartolino");

/*
 * importare un framework (libreria) o un file (da errore quindi lo ho commentato)
*/

const qualcosa /*= require("nomelibreria")*/;

/*
 * JSON
*/

let persona = {
  nome: "Daniele",
  age: 15,
};

// scrive Daniele
console.log(persona.nome);

// per concatenare scritte e variabili
console.log(`questa persona si chiama ${persona.nome} e ha ${persona.age} anni!`);