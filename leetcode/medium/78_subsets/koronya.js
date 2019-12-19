// https://leetcode.com/problems/subsets
// Runtime: 56 ms, faster than 88.20% of JavaScript online submissions for Subsets.
// Memory Usage: 35.6 MB, less than 5.88% of JavaScript online submissions for Subsets.
const subsets = nums => {
  const resultArr = []
  const numsLen = nums.length
  const backtracking = (arr, count) => {
    resultArr.push([...arr])
    for (let i = count; i < numsLen; i += 1) {
      const item = nums[i]
      arr.push(item)
      backtracking(arr, i + 1)
      arr.pop()
    }
  }

  backtracking([], 0)
  return resultArr
}
