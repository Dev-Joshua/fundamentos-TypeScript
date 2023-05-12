(() => {
  let userId: string | number;
  userId = 1212;
  userId = 'asad';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string: ${myText.toUpperCase()}`);
    } else {
      console.log(`string: ${myText.toFixed(1)}`);
    }
  }
  greeting('asa');
  greeting(12.2345);
})();

/*
  De acuerdo a la condicional if podemos activar un tipado distinto de manera dinamica.
  Asi va activar en el bloque todos los metodos relacionados a ese tipo de dato

*/
