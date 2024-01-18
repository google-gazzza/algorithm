// [JS][6kyu] Odd-heavy Array
// odd-heavy-array
// https://www.codewars.com/kata/59c7e477dcc40500f50005c7/train/javascript

const isOddHeavy = (n) => {
  const oddArr = n.filter((num) => num % 2 === 1 || num % 2 === -1).sort((a, b) => a - b)
  if (oddArr.length === 0) {
    return false
  }
  const evenArr = n.filter((num) => num % 2 === 0).sort((a, b) => b - a)
  if (evenArr.length === 0) {
    return true
  }
  return oddArr[0] > evenArr[0]
}

isOddHeavy([0, 2, 19, 4, 4]) === true
isOddHeavy([1, -2, -1, 2]) === false
isOddHeavy([]) === false
isOddHeavy([3]) === true
isOddHeavy([4, 6, 8]) === false
isOddHeavy([3, 5, 7]) === true
isOddHeavy([11, 4, 9, 2, 8]) === true
isOddHeavy([11, 4, 9, 2, 3, 10]) === false
isOddHeavy([0, 1, -1]) === false
