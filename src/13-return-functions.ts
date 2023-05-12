(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  };

  const rta = calcTotal([5, 5, 10, 3]);
  console.log(rta);

  // funcion que no tiene retorno
  const printTotal = (prices: number[]): void => {
    const rta2 = calcTotal(prices);
    console.log(`El total es ${rta2}`);
  };

  printTotal([2, 2, 6]);
})();

// Indicamos que esta funcion retorna un string para eso convertimos el total en string
// const calcTotal = (prices: number[]): string => {}

// Las funciones que no retornen nada van a ser void => tipo cuando no retorna nada
