/** Exemplo prático usando FILTER */
const { mailList, childrenAge } = require("./data");

// Filtrar crianças entre 2 e 11 anos
const childrens = childrenAge.filter(element => element >= 2 && element <= 11);
console.table(childrens);

// Filtrar emails do domínio gmail.com
const emails = mailList.filter(email => email.includes("@gmail.com"));

console.table(emails);
