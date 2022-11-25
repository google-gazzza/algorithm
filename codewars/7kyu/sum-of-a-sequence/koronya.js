// [JS][7kyu] Sum of a sequence
// sum-of-a-sequence
// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript

const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0
  }

  let sum = 0
  for (let i = begin; i <= end; i += step || 0) {
    sum += i
  }
  return sum
}

sequenceSum(2, 6, 2)
sequenceSum(1, 5, 1)
sequenceSum(1, 5, 3)
