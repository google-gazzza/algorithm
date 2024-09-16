// [JS][5kyu] Maximum subarray sum
// maximum-subarray-sum
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

const getMax = (arr) => {
  const arrLen = arr.length
  let max = arr[0]
  let sum = max
  for (let i = 1; i < arrLen; i += 1 || 0) {
    sum += arr[i]
    max = Math.max(max, sum)
  }
  return max
}

const maxSequence = (arr) => {
  const arrLen = arr.length
  if (arrLen === 0) {
    return 0
  }
  let max = 0
  for (let start = 0; start < arrLen; start += 1) {
    max = Math.max(max, getMax(arr.slice(start)))
  }

  return max
}

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// maxSequence([0])
// maxSequence([1, 2, 3, -10, 7, 8, -20, 30])

maxSequence([-1, -2, -3])
