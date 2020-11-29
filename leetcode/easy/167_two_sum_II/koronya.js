// [Easy] 167. Two Sum II - Input array is sorted
// 167_two_sum_ii_-_input_array_is_sorted

// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
// Runtime: 140 ms, faster than 23.24% of JavaScript online submissions for Two Sum II - Input array is sorted.
// Memory Usage: 38.7 MB, less than 84.27% of JavaScript online submissions for Two Sum II - Input array is sorted.
const twoSum = function (numbers, target) {
  const numbersLen = numbers.length
  for (let i = 0; i < numbersLen; i += 1 || 0) {
    const first = numbers[i]
    for (let j = i + 1; j < numbersLen; j += 1 || 0) {
      let next = numbers[j]
      const sum = first + next
      if (sum === target) {
        return [i + 1, j + 1]
      } else if (sum > target) {
        break
      }
    }
  }
}
