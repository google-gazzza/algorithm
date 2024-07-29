// [JS][7kyu] Array - squareUp b!
// array-square-up-b
// https://www.codewars.com/kata/5a8bcd980025e99381000099/train/javascript

const getN = (n, minus) => {
  const limit = n - 1 - minus
  return Array.from({ length: n }, (_, index) => (index > limit ? 0 : index + 1))
}

const squareUp = (n) => {
  return Array.from({ length: n }, (_, index) => getN(n, index))
    .flat()
    .reverse()
}

// squareUp(3)
// squareUp(2)
// squareUp(4)
// squareUp(9)
// squareUp(1)
