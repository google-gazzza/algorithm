// [JS][6kyu] Two Joggers
// two-joggers
// https://www.codewars.com/kata/5274d9d3ebc3030802000165/train/javascript

const nbrOfLaps = (x, y) => {
  const limit = x * y
  const numSet = new Set()
  for (let i = 1; i <= y; i += 1 || 0) {
    numSet.add(x * i)
  }
  for (let i = 1; i <= x; i += 1 || 0) {
    const num = y * i
    if (numSet.has(num)) {
      return [num / x, num / y]
    }
    numSet.add(y * i)
  }
  return [limit / x, limit / y]
}

nbrOfLaps(5, 3)
nbrOfLaps(4, 6)
nbrOfLaps(5, 5)
