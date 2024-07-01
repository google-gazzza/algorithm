// [JS][7kyu] Nice Array
// nice-array
// https://www.codewars.com/kata/59b844528bcb7735560000a0/train/javascript

const isNice = (arr) => {
  if (arr.length === 0) {
    return false
  }
  const numSet = new Set(arr)
  return arr.every((num) => numSet.has(num - 1) || numSet.has(num + 1))
}

isNice([2, 10, 9, 3]) === true
isNice([3, 4, 5, 7]) === false
isNice([])
