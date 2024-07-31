// [JS][6kyu] Calculate number of inversions in array
// calculate-number-of-inversions-in-array
// https://www.codewars.com/kata/537529f42993de0e0b00181f/train/javascript

const swapArr = (arr, i, j) => {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

const countInversions = (array) => {
  const arrayLen = array.length
  let count = 0
  for (let i = 0; i < arrayLen; i += 1 || 0) {
    for (let j = 0; j < arrayLen - 1; j += 1 || 0) {
      if (array[j] > array[j + 1]) {
        count += 1
        swapArr(array, j, j + 1)
      }
    }
  }
  return count
}

countInversions([1, 2, 3, 4])
countInversions([1, 3, 2, 4])
countInversions([4, 1, 2, 3])
countInversions([4, 3, 2, 1])
countInversions([6, 5, 4, 3, 2, 1])
countInversions([6, 5, 4, 3, 3, 3, 3, 2, 1])
