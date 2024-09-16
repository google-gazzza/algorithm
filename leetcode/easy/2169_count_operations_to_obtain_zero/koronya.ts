// [Easy] 2169. Count Operations to Obtain Zero
// 2169_count_operations_to_obtain_zero

// https://leetcode.com/problems/count-operations-to-obtain-zero
// Runtime: 68 ms, faster than 100.00% of TypeScript online submissions for Count Operations to Obtain Zero.
// Memory Usage: 43.8 MB, less than 100.00% of TypeScript online submissions for Count Operations to Obtain Zero.

function countOperations(num1: number, num2: number): number {
  let count: number = 0
  while (num1 !== 0 && num2 !== 0) {
    count += 1
    if (num1 >= num2) {
      num1 -= num2
    } else {
      num2 -= num1
    }
  }
  return count
}
