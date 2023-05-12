import { Product } from './product.model';

//Esta variable sera un array de objetos que cumple con el tipaado Product
export const products: Product[] = [];

export const createdProduct = (data: Product) => {
  products.push(data);
};

export const calcStock = (): number => {
  let total = 0;
  products.forEach((item) => {
    total += item.stock;
  });
  return total;
};
