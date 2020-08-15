// https://leetcode.com/problems/reducing-dishes
// Runtime: 56 ms, faster than 89.36% of JavaScript online submissions for Reducing Dishes.
// Memory Usage: 34.5 MB, less than 100.00% of JavaScript online submissions for Reducing Dishes.
const getMatchValue = (arr, start) => {
  const arrLen = arr.length
  let sum = 0
  for (let i = 0; i < arrLen - start; i = i + 1 | 0) {
    sum += arr[start + i] * (i + 1)
  }
  return sum
}

const maxSatisfaction = satisfaction => {
  const satisfactionLen = satisfaction.length
  satisfaction.sort((a, b) => a - b)
  if (satisfaction[satisfactionLen - 1] < 0) {
    return 0
  }
  let greaterEqualThanZeroIndex = -1
  for (let i = satisfactionLen - 1; i >= 0; i = i - 1 | 0) {
    if (satisfaction[i] < 0) {
      greaterEqualThanZeroIndex = i
      break;
    }
  }
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i <= greaterEqualThanZeroIndex + 1; i = i + 1 | 0) {
    max = Math.max(getMatchValue(satisfaction, i), max)
  }
  return max
}
