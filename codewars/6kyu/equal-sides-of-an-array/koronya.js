// [JS][6kyu] Equal Sides Of An Array
// equal-sides-of-an-array
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

const findEvenIndex = (arr) => {
  const sum = arr.reduce((acc, cur) => acc + cur, 0)
  let left = 0
  let right = sum - arr[0]
  if (right === 0) {
    return 0
  }
  const arrLen = arr.length
  for (let i = 1; i < arrLen; i += 1 || 0) {
    const prev = arr[i - 1]
    const num = arr[i]
    left += prev
    right -= num
    if (left === right) {
      return i
    }
  }
  return -1
}

findEvenIndex([1, 2, 3, 4, 3, 2, 1])
findEvenIndex([1, 100, 50, -51, 1, 1])
findEvenIndex([20, 10, -80, 10, 10, 15, 35])
