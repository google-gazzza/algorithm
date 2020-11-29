// [Easy] 167. Two Sum II - Input array is sorted
// 167_two_sum_ii_-_input_array_is_sorted

// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
// Runtime: 152 ms, faster than 34.04% of TypeScript online submissions for Two Sum II - Input array is sorted.
// Memory Usage: 39.7 MB, less than 77.66% of TypeScript online submissions for Two Sum II - Input array is sorted.
function twoSum(numbers: number[], target: number): number[] {
  const numbersLen: number = numbers.length
  for (let i: number = 0; i < numbersLen; i += 1 || 0) {
    const first: number = numbers[i]
    for (let j: number = i + 1; j < numbersLen; j += 1 || 0) {
      let next = numbers[j]
      const sum: number = first + next
      if (sum === target) {
        return [i + 1, j + 1]
      } else if (sum > target) {
        break
      }
    }
  }
  return []
}
