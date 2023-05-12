(() => {
  let clubName: string = 'Manchester City';
  // clubName = null
  // clubName = () => {}
  // clubName = 123
  clubName = 'Liverpool';
  console.log('clubName', clubName);

  const clubStadium = " 'A'N'F'I'E'L'D' ";
  console.log('clubStadium', clubStadium);

  let clubPrice = 2500000000;
  let isChampion = true;

  const summary = `
    title: ${clubName}
    description: ${clubStadium}
    price: ${clubPrice}
    isChampion: ${isChampion}
  `;
  console.log(summary);

  const myString: string = '';
})();
