/** Exemplo prático usando SORT */
const { passengers, shopCart } = require("./data");

// Ordene o carrinho do maior quantidade de produtos para o menor
const orderByTotalProducts = shopCart.sort((a, b) => b.quantity - a.quantity);
console.table(orderByTotalProducts);

// Ordene os passageiros por nome
const orderByPassegerName = passengers.sort((pa, pb) => {
  if (pa.name.toLocaleLowerCase() < pb.name.toLocaleLowerCase()) return -1;
  if (pa.name.toLocaleLowerCase() > pb.name.toLocaleLowerCase()) return 1;
  return 0;
});
console.table(orderByPassegerName);
