// [JS][6kyu] Selective Array Reversing
// selective-array-reversing
// https://www.codewars.com/kata/58f6000bc0ec6451960000fd/train/javascript

const selReverse = (array, length) => {
  if (length === 0) {
    return array
  }
  const arrayLen = array.length
  if (length === arrayLen) {
    return array.reverse()
  }
  const result = []
  for (let i = 0; i < arrayLen; i += length || 0) {
    result.push(array.slice(i, i + length).reverse())
  }
  return result.flat()
}

// selReverse([2, 4, 6, 8, 10, 12, 14, 16], 3)
// selReverse([1, 2, 3, 4, 5, 6], 2)
// selReverse([1, 2, 3, 4, 5, 6], 0)
// selReverse([1, 2, 3, 4, 5, 6], 1)
// selReverse([1, 2, 3, 4, 5, 6], 10)
