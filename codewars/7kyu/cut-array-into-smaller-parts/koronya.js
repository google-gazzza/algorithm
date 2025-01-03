// [JS][7kyu] Cut array into smaller parts
// cut-array-into-smaller-parts
// https://www.codewars.com/kata/58ac59d21c9e1d7dc5000150/train/javascript

const makeParts = (arr, chunkSize) => {
  const arrLen = arr.length
  const result = []
  for (let i = 0; i < arrLen; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize))
  }
  return result
}

makeParts([1, 2, 3, 4, 5], 2)
makeParts([1, 2, 3], 1)
makeParts([1, 2, 3, 4, 5], 10)
