(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';
  myDynamicVar = true;

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 12.9887;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();

/*
  El tipo de dato any “desactiva” el tipado de TS, volviendo de cierta forma a JS.
  No es recomendado usar any. Sin embargo, puede ser útil cuando estamos migrando código JS a TS.
  Podemos convertir de any a cualquier otro tipo de dato con el as operator. Este se usa de la siguiente forma.
*/

// any => cualquier tipado
