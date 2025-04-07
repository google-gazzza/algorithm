// [JS][7kyu] Possibilities Array
// possibilities-array
// https://www.codewars.com/kata/59b710ed70a3b7dd8f000027/train/javascript

const isAllPossibilities = (x) => {
  const xLen = x.length
  const limit = xLen
  const xSet = new Set(x.filter((n) => n >= 0 && n < limit))
  return xSet.size === xLen
}

isAllPossibilities([1, 2, 0, 3])
isAllPossibilities([0, 1, 2, 2, 3])
isAllPossibilities([0])
