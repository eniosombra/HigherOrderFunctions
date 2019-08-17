/** Exemplo prático usando MAP */
const { passengers } = require("./data");

let currencyYear = new Date().getFullYear();

// Exibir o nome e a idade (em anos) de cada passageiro
const newPassegers = passengers.map(
  passeger => `${passeger.name} tem ${currencyYear - passeger.birthYear} anos`
);
console.table(newPassegers);

// Identifique quais nomes são ou não palindromos
const founds = passengers.map(passeger => {
  const reserveName = [].map
    .call(passeger.name, letter => letter)
    .reverse()
    .join("");

  if (reserveName.toLowerCase() === passeger.name.toLocaleLowerCase())
    return `O nome ${passeger.name} É palíndromo`;
  else return `O nome ${passeger.name} NÃO é palíndromo`;
});

console.table(founds);
