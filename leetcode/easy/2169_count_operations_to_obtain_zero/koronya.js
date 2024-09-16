// [Easy] 2169. Count Operations to Obtain Zero
// 2169_count_operations_to_obtain_zero

// https://leetcode.com/problems/count-operations-to-obtain-zero
// Runtime: 75 ms, faster than 100.00% of JavaScript online submissions for Count Operations to Obtain Zero.
// Memory Usage: 41.6 MB, less than 100.00% of JavaScript online submissions for Count Operations to Obtain Zero.

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
const countOperations = function (num1, num2) {
  let count = 0
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

countOperations(2, 3)
countOperations(10, 10)
