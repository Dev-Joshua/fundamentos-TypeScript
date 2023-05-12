import { createdProduct, calcStock, products } from './product.services';

createdProduct({
  name: 'Pro1',
  createdAt: new Date(1994, 1, 1),
  stock: 5,
});
createdProduct({
  name: 'Pro2',
  createdAt: new Date(1992, 1, 1),
  stock: 15,
  size: 'S',
});
console.log(products);
const total = calcStock();
console.log(total);
