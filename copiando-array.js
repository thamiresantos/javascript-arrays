const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10]; //Esse é um operador do JavaScript que se chama spread operator, ou "operador de espalhamento". Ao utilizá-lo junto com uma lista, ele pega todo o conteúdo desse array e espalhar seus valores no local que estamos indicando.

//novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);