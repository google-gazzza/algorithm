// [JS][6kyu] Santa's Missing Gift List
// santa-s-missing-gift-list
// https://www.codewars.com/kata/5665d30b3ea3d84a2c000025/train/javascript

const GIFTS = {
  1: 'Toy Soldier',
  2: 'Wooden Train',
  4: 'Hoop',
  8: 'Chess Board',
  16: 'Horse',
  32: 'Teddy',
  64: 'Lego',
  128: 'Football',
  256: 'Doll',
  512: "Rubik's Cube",
}

const gifts = (number) => {
  const arr = []
  while (number > 0) {
    arr.push(number % 2)
    number = Math.floor(number / 2)
  }
  return arr.reduce((acc, cur, index) => (cur === 0 ? acc : [...acc, GIFTS[2 ** index]]), []).sort()
}

gifts(1)
gifts(2)
gifts(3)
gifts(22)
gifts(160)
