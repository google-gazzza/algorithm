// [JS][6kyu] Sum two arrays
// sum-two-arrays
// https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6/train/javascript

const convertValue = (arr) => (arr.length === 0 ? 0 : parseInt(arr.join('')))

const addArrays = (array1, array2) => {
  let arrayToNumber1 = convertValue(array1)
  let arrayToNumber2 = convertValue(array2)
  const sum = arrayToNumber1 + arrayToNumber2
  if (sum === 0) {
    return []
  }

  const arr = String(sum).split('')
  if (sum < 0) {
    arr.shift()
    arr[0] = `-${arr[0]}`
  }

  return arr.map(Number)
}

// addArrays([3, 2, 9], [1, 2])
// addArrays([4, 7, 3], [1, 2, 3])
// addArrays([1], [5, 7, 6])
// addArrays([6, 7], [])
// addArrays([], [])
// addArrays([3, 2, 6, 6], [-7, 2, 2, 8])
