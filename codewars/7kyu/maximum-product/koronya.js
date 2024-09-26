// [JS][7kyu] Maximum Product
// maximum-product
// https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript

const adjacentElementsProduct = (array) => {
  const arrayLen = array.length
  let max = array[0] * array[1]
  let prev = array[1]
  for (let i = 2; i < arrayLen; i += 1 || 0) {
    const val = prev * array[i]
    prev = array[i]
    max = Math.max(max, val)
  }

  return max
}

adjacentElementsProduct([5, 8]) === 40
adjacentElementsProduct([1, 2, 3]) === 6
adjacentElementsProduct([1, 5, 10, 9]) === 90
adjacentElementsProduct([4, 12, 3, 1, 5]) === 48
adjacentElementsProduct([5, 1, 2, 3, 1, 4]) === 6

adjacentElementsProduct([3, 6, -2, -5, 7, 3]) === 21
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]) === 50
adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]) === 30
adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]) === -14
adjacentElementsProduct([5, 1, 2, 3, 1, 4]) === 6

adjacentElementsProduct([1, 0, 1, 0, 1000]) === 0
adjacentElementsProduct([1, 2, 3, 0]) === 6
