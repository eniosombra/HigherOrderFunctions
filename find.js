/** Exemplo prático usando FIND */

const { passengers } = require("./data");

// Encontre o pagassageiro de nome Enio
const passegerFound = passengers.find(
  passeger => passeger.name.toLowerCase() === "enio"
);

console.table(passegerFound);
