(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice: ', productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 2;
  console.log('customerAge: ', customerAge);

  let productInStock: number;
  console.log('productInStock: ', productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('120');
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  /*hexadecimal */
  let hex = 0xfff;
  console.log('hex', hex);

  /*binario */
  let bin = 0b1010;
  console.log('bin', bin);

  const myNumber: number = 10;
})();

/* Trabajando de forma inferida */
// Recomendacion: Usar el tipado number en minuscula, no en Mayuscula
