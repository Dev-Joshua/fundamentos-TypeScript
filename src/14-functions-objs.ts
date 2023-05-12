(() => {
  const login = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  login({
    email: 'dan@dan.co',
    password: '12345',
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes; //Size opcional
  }) => {
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
})();
