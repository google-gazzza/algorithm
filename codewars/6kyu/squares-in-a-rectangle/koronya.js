// [JS][6kyu] Squares in a Rectangle
// squares-in-a-rectangle
// https://www.codewars.com/kata/5a62da60d39ec5d947000093/train/javascript

const findSquares = (x, y) => {
  let sum = x * y
  const min = Math.min(x, y)
  for (let i = 1; i < min; i += 1) {
    sum += (x - i) * (y - i)
  }
  return sum
}

findSquares(3, 2) === 8
findSquares(4, 3) === 20
findSquares(11, 4) === 100
