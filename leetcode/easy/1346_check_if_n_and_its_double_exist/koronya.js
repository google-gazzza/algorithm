// [Easy] 1346. Check If N and Its Double Exist
// 1346_check_if_n_and_its_double_exist

// https://leetcode.com/problems/check-if-n-and-its-double-exist
// Runtime: 72 ms, faster than 96.77% of JavaScript online submissions for Check If N and Its Double Exist.
// Memory Usage: 39.9 MB, less than 42.83% of JavaScript online submissions for Check If N and Its Double Exist.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function (arr) {
  const arrLen = arr.length
  const numSet = new Set()
  for (let i = 0; i < arrLen; i += 1 || 0) {
    const num = arr[i]
    if (num !== 0 && (numSet.has(num * 2) || numSet.has(num / 2))) {
      return true
    } else if (num === 0 && numSet.has(num)) {
      return true
    }
    numSet.add(num)
  }
  return false
}

// checkIfExist([10, 2, 5, 3]) //?
// checkIfExist([7, 1, 14, 11]) //?
// checkIfExist([3, 1, 7, 11]) //?
// checkIfExist([-2, 0, 10, -19, 4, 6, -8]) //?
checkIfExist([0, 0]) //?
