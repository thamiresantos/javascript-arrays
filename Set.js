const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes); //Removendo elementos repetidos

const nomesAtualizados = [...meuSet];

// outro jeito de fazer
//const nomesAtualizados = [... new Set(nomes)];

console.log(nomesAtualizados);