// https://leetcode.com/problems/subsets-ii
// Runtime: 60 ms, faster than 91.43% of JavaScript online submissions for Subsets II.
// Memory Usage: 37 MB, less than 10.00% of JavaScript online submissions for Subsets II.
const subsetsWithDup = nums => {
  const resultArr = []
  const sortNums = nums.sort()
  const resultSet = new Set()
  const numsLen = nums.length
  const backtracking = (arr, count) => {
    const str = arr.join(',')
    if (!resultSet.has(str)) {
      resultSet.add(str)
      resultArr.push([...arr])
    }
    for (let i = count; i < numsLen; i += 1) {
      const item = sortNums[i]
      arr.push(item)
      backtracking(arr, i + 1)
      arr.pop()
    }
  }

  backtracking([], 0)
  return resultArr
}
