(() => {
  let pricess: number[] = [1, 2, 2, 2, 1, 1, 2212];
  // pricess.push('asas')
  // pricess.push(true)
  // pricess.push({})
  pricess.push(23);

  let elements = [1, 2, 2, 2, 1, 1, 2212, 'madrid', true];
  elements.push('Medellin');
  elements.push(31);
  elements.push(false);

  let products = ['hola', true];
  // products.push(12)
  products.push(false);

  let mixed: (string | number | boolean)[] = ['Liverpool', true];
  mixed.push(12);
  mixed.push('Manchester United');
  mixed.push(false);
  // mixed.push({})   Object
  // mixed.push([])   Object

  let numbers = [1, 2, 2, 2, 34, 23, 23, 2];
  console.log(numbers);

  numbers.map((item) => {
    let newArray = item * 2;
    console.log(newArray);
  });
})();
