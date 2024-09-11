// [JS][6kyu] Simple Fun #52: Pair Of Shoes
// simple-fun-52-pair-of-shoes
// https://www.codewars.com/kata/58885a7bf06a3d466e0000e3/train/javascript

function pairOfShoes(shoes) {
  const leftMap = new Map()
  const rightMap = new Map()
  for (const [side, size] of shoes) {
    if (side === 0) {
      leftMap.set(size, leftMap.has(size) ? leftMap.get(size) + 1 : 1)
    } else {
      rightMap.set(size, rightMap.has(size) ? rightMap.get(size) + 1 : 1)
    }
  }

  return leftMap.size === rightMap.size && [...leftMap].every(([size, count]) => rightMap.has(size) && rightMap.get(size) === count)
}

// pairOfShoes([
//   [0, 20],
//   [0, 21],
//   [1, 19],
//   [1, 22],
// ])
// pairOfShoes([
//   [0, 20],
//   [0, 21],
//   [1, 19],
//   [1, 22],
// ]) === false
// pairOfShoes([
//   [0, 21],
//   [1, 23],
//   [1, 21],
//   [0, 23],
// ]) === true
// pairOfShoes([
//   [0, 23],
//   [1, 23],
//   [1, 23],
//   [0, 23],
//   [0, 23],
//   [0, 23],
// ]) === false
// pairOfShoes([
//   [0, 21],
//   [1, 23],
//   [1, 21],
//   [1, 23],
// ]) === false
// pairOfShoes([
//   [0, 23],
//   [1, 21],
//   [1, 23],
//   [0, 21],
//   [1, 22],
//   [0, 22],
// ]) === true
// pairOfShoes([
//   [0, 23],
//   [1, 21],
//   [1, 23],
//   [0, 21],
// ]) === true
// pairOfShoes([
//   [0, 23],
//   [1, 21],
//   [1, 23],
//   [0, 21],
// ]) === true
// pairOfShoes([[0, 23]]) === false
// pairOfShoes([
//   [0, 23],
//   [1, 23],
// ]) === true
// pairOfShoes([
//   [0, 23],
//   [1, 22],
// ]) === false
