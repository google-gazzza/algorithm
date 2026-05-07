// [JS][7kyu] Are they square?
// are-they-square
// https://www.codewars.com/kata/56853c44b295170b73000007/train/javascript

const isSquare = (arr) => {
  if (arr.length === 0) {
    return undefined
  }
  return arr.every((num) => {
    const sqrt = Math.sqrt(num)
    return sqrt === Math.floor(sqrt)
  })
}

isSquare([1, 4, 9, 16, 25, 36]) === true
isSquare([1, 2, 3, 4, 5, 6]) === false
isSquare([]) === undefined
isSquare([1, 2, 4, 15]) === false
