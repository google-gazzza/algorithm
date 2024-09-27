// [Easy] 645. Set Mismatch
// 645_set_mismatch

// https://leetcode.com/problems/set-mismatch
// Runtime: 116 ms, faster than 62.50% of TypeScript online submissions for Set Mismatch.
// Memory Usage: 49 MB, less than 12.50% of TypeScript online submissions for Set Mismatch.
const findErrorNums = function (nums: number[]): number[] {
  const resultArr: number[] = []
  const numsLen: number = nums.length
  const numSet = new Set<number>()
  for (let i: number = 1; i <= numsLen; i += 1) {
    numSet.add(i)
  }
  nums.forEach(num => {
    if (numSet.delete(num) === false) {
      resultArr.push(num)
    }
  })
  numSet.forEach(num => resultArr.push(num))

  return resultArr
}
