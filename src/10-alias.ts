(() => {
  // alias type
  type UserID = string | number;
  let userId: UserID;

  // literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  // let shirtSize: string
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 's'

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string: ${userId.toUpperCase()}`);
    }
  }
  greeting(1123, 'S');
  greeting('123', 'XL');
})();
