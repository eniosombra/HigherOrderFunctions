/** Exemplo prático usando FOREACH */
const { passengers } = require("./data");

let currencyYear = new Date().getFullYear();

// Adicione a idade para cada pessoa
passengers.forEach(passenger => {
  passenger.age = currencyYear - passenger.birthYear;
});

console.table(passengers);
