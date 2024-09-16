// [Easy] 1346. Check If N and Its Double Exist
// 1346_check_if_n_and_its_double_exist

// https://leetcode.com/problems/check-if-n-and-its-double-exist
// Runtime: 72 ms, faster than 99.05% of TypeScript online submissions for Check If N and Its Double Exist.
// Memory Usage: 40.4 MB, less than 48.57% of TypeScript online submissions for Check If N and Its Double Exist.


function checkIfExist(arr: number[]): boolean {
  const arrLen: number = arr.length
  const numSet = new Set<number>()
  for (let i: number = 0; i < arrLen; i += 1) {
    const num: number = arr[i]
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
