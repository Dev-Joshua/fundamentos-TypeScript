(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes; //Size opcional
  };

  //Esta variable sera un array de objetos que cumple con el tipaado Product
  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title: 'Pd1',
    createdAt: new Date(1995, 1, 1),
    stock: 12,
  });
  console.log(products);

  addProduct({
    title: 'Pd1',
    createdAt: new Date(1995, 1, 1),
    stock: 12,
    size: 'S',
  });
  console.log(products);
  products.push({
    title: 'Pd3',
    createdAt: new Date(1993, 1, 1),
    stock: 45,
    size: 'M',
  });
  console.log(products);
})();
