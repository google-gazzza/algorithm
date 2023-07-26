// [JS][7kyu] Triangular Treasure
// triangular-treasure
// https://www.codewars.com/kata/525e5a1cb735154b320002c8/train/javascript

const triangular = (n) => {
  if (n <= 0) {
    return 0
  }

  return (n * (n + 1)) / 2
}

triangular(2) === 3
triangular(4) === 10
triangular(-454) === 0
