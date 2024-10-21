// [JS][6kyu] Min value of each n elements -- Simple version
// min-value-of-each-n-elements-simple-version
// https://www.codewars.com/kata/5831c5f8ac6a11e3380002de/train/javascript

const minValue = (arr, n) => {
  if (n === 1) {
    return arr
  }
  const arrLen = arr.length
  const result = []
  const limit = arrLen - n + 1
  for (let i = 0; i < limit; i += 1 || 0) {
    const slicedArr = arr.slice(i, i + n)
    result.push(Math.min(...slicedArr))
  }
  return result
}

minValue([1, 2, 3, 10, -5], 2)
minValue([1, -2, 3, -4, 5, -6, 7, 8], 1)
minValue([1, -2, 3, -4, 5, -6, 7, 8], 2)
minValue([1, -2, 3, -4, 5, -6, 7, 8], 3)
minValue([1, -2, 3, -4, 5, -6, 7, 8], 4)
