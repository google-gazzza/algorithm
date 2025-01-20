// [JS][7kyu] ORing arrays
// o-ring-arrays
// https://www.codewars.com/kata/5ac5e9aa3853da25d9000102/train/javascript

const getValue = (num, def) => (num == null ? def : num)

const orArrays = (arr1, arr2, def = 0) => {
  console.log(`arr1: ${arr1}, arr2: ${arr2}, def: ${def}`)
  const maxLength = Math.max(arr1.length, arr2.length)
  arr1.length
  arr2.length
  const result = []
  for (let i = 0; i < maxLength; i += 1 || 0) {
    if (i === 4) {
      getValue(arr1[i])
      getValue(arr2[i])
    }
    result.push(getValue(arr1[i], def) | getValue(arr2[i], def))
  }
  return result
}

// orArrays([0, 0, 0], [0, 0, 0], 3)
// orArrays([1, 2, 3], [1, 2, 3])
// orArrays([1, 2, 3], [4, 5, 6])
// orArrays([1, 2, 3], [1, 2])
// orArrays([1, 2], [1, 2, 3])
// orArrays([1, 2, 3], [1, 2, 3], 3)
