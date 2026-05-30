// [JS][7kyu] Sum and Length
// sum-and-length
// https://www.codewars.com/kata/571965ccdf7fdb10a00000ea/train/javascript

const sumLength = (array) => {
  if (array.length === 0) {
    return '0 0'
  }
  let isZeroNetgative = true
  let sumOfPositive = 0
  let countOfNegative = 0
  array.forEach((num) => {
    if (num > 0) {
      sumOfPositive += num
    } else if (num < 0) {
      countOfNegative += 1
    }
    if (num === 0) {
      if (isZeroNetgative) {
        countOfNegative += 1
      }
      isZeroNetgative = !isZeroNetgative
    }
  })

  return `${sumOfPositive} ${countOfNegative}`
}

sumLength([1, 2, 3, 4, -1, -2, -3])
sumLength([1, 2, 3, 4, 0, -1, -2, -3])
sumLength([-1, 2, 3, 4, 0, 1, 0, -2, 0, -3])
sumLength([-1, -2, -3, -4, 0, -1, 0, -2, 0, -3])
sumLength([1, 2, 3, 4, 1, 2, 3])
sumLength([0, 0, 0, 0, 0, 0, 0])
sumLength([])
