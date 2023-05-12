(() => {
  // let myNumber: number = undefined
  // let myString: string = null

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 23;

  let myString: string | undefined = undefined;
  myString = 'Real Madrid';

  function hi(name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name.toLowerCase();
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  //misma funcion pero con codigo mas limpio y utilizando el optional chaining
  function hiVrsion2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toUpperCase() || 'nobody';
    console.log(hello);
  }

  hi('Joshua');
  hi(null);
  hiVrsion2('Daniel');
  hiVrsion2(null);
})();
