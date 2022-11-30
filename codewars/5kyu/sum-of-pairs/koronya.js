// [JS][5kyu] Sum of Pairs
// sum-of-pairs
// https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript

function sumPairs(ints, s) {
  const intsLen = ints.length
  let result = []
  let secondIndex = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < intsLen; i += 1 || 0) {
    const first = ints[i]
    const rest = s - first
    const limit = Math.min(secondIndex, intsLen)
    for (let j = i + 1; j <= limit; j += 1 || 0) {
      const second = ints[j]
      if (second === rest && secondIndex > j) {
        secondIndex = j
        result = [first, second]
        break
      }
    }
  }

  if (secondIndex === Number.MAX_SAFE_INTEGER) {
    return undefined
  }
  return result
}

// sumPairs([11, 3, 7, 5], 10)
// sumPairs([4, 3, 2, 3, 4], 6)
sumPairs([20, -13, 40], -7)