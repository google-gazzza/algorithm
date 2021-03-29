// [Easy] 1752. Check if Array Is Sorted and Rotated
// 1752_check_if_array_is_sorted_and_rotated

// https://leetcode.com/problems/check-if-array-is-sorted-and-rotated
// Runtime: 76 ms, faster than 89.74% of TypeScript online submissions for Check if Array Is Sorted and Rotated.
// Memory Usage: 40.5 MB, less than 5.13% of TypeScript online submissions for Check if Array Is Sorted and Rotated.

function check(nums: number[]): boolean {
  const sortedNums: number[] = [...nums].sort((a, b) => a - b)
  const firstNum: number = sortedNums[0]
  const numsLen: number = nums.length
  const getIndex = (index: number): number => (index < numsLen ? index : index - numsLen)
  const indices: number[] = []
  let idx: number = nums.indexOf(firstNum)
  while (idx != -1) {
    indices.push(idx)
    idx = nums.indexOf(firstNum, idx + 1)
  }
  const indicesLen: number = indices.length
  for (let i: number = 0; i < indicesLen; i += 1) {
    const indexOfFirstNum: number = indices[i]
    let flag: boolean = true
    for (let j: number = 0; j < numsLen; j += 1) {
      if (nums[getIndex(indexOfFirstNum + j)] !== sortedNums[j]) {
        flag = false
        break
      }
    }
    if (flag === true) {
      return true
    }
  }
  return false
}

check([3, 4, 5, 1, 2]) //?
check([4, 3, 5, 1, 2]) //?
check([1, 2]) //?
check([2, 1]) //?
check([6, 10, 6]) //?
