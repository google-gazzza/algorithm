// [JS][6kyu] Length of missing array
// length-of-missing-array
// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/train/javascript

const getLengthOfMissingArray = (arrayOfArrays) => {
  if (!arrayOfArrays || arrayOfArrays.length === 0) {
    return 0
  }
  if (arrayOfArrays.some((item) => !item || item.length === 0) === true) {
    return 0
  }
  const seqArr = arrayOfArrays.map((arr) => arr.length).sort((a, b) => a - b)
  const limit = seqArr.length - 1
  for (let i = 0; i < limit; i += 1 || 0) {
    if (seqArr[i] + 1 !== seqArr[i + 1]) {
      return seqArr[i] + 1
    }
  }
}

getLengthOfMissingArray([[], [3, 4, 0, 2], [1], [3, 3]])
getLengthOfMissingArray([[], [3], [3, 1, 2]])
getLengthOfMissingArray([[]])
// getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
// getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
// getLengthOfMissingArray([[null], [null, null, null]])
// getLengthOfMissingArray([['a', 'a', 'a'], ['a', 'a'], ['a', 'a', 'a', 'a'], ['a'], ['a', 'a', 'a', 'a', 'a', 'a']])
// getLengthOfMissingArray([])
