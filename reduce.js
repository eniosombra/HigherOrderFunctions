/** Exemplo prático usando REDUCE */
const { shopCart } = require("./data");

// Valor total do carrinho de compras
const totalValue = shopCart.reduce(
  (acc, item) => acc + item.quantity * item.unitPrice,
  0
);
console.table(totalValue);

// Quantidade total de produtos do carrinho de compras
const totalProducts = shopCart.reduce(
  (totalProduct, product) => totalProduct + product.quantity,
  0
);
console.table(totalProducts);
