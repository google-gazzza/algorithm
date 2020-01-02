// https://leetcode.com/problems/combination-sum-ii
// Runtime: 108 ms, faster than 75.00% of JavaScript online submissions for Combinations.
// Memory Usage: 40.4 MB, less than 83.33% of JavaScript online submissions for Combinations.
const combinationSum2 = (candidates, target) => {
  const candidateslen = candidates.length
  const sortedCandidates = candidates.sort()
  const resultArr = []
  const resultSet = new Set()
  const backtracking = (arr, sum, start) => {
    if (sum > target) {
      return
    }
    if (sum === target) {
      const str = arr.join(',')
      if (!resultSet.has(str)) {
        resultSet.add(str)
        resultArr.push([...arr])
      }
      return
    }
    for (let i = start; i < candidateslen; i += 1) {
      const item = sortedCandidates[i]
      arr.push(item)
      backtracking(arr, sum + item, i + 1)
      arr.pop()
    }
  }
  backtracking([], 0, 0)
  return resultArr
}
