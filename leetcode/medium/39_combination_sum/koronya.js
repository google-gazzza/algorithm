// https://leetcode.com/problems/combination-sum
// Runtime: 52 ms, faster than 99.94% of JavaScript online submissions for Combination Sum.
// Memory Usage: 36.6 MB, less than 73.33% of JavaScript online submissions for Combination Sum.
// 처음 풀었던게 너무 느려서 다시 풀은 것!
const combinationSum = (candidates, target) => {
  const candidateslen = candidates.length
  const resultArr = []
  const backtracking = (arr, sum, start) => {
    if (sum > target) {
      return
    }
    if (sum === target) {
      resultArr.push([...arr])
      return
    }
    for (let i = start; i < candidateslen; i += 1) {
      const item = candidates[i]
      arr.push(item)
      backtracking(arr, sum + item, i)
      arr.pop()
    }
  }
  backtracking([], 0, 0)
  return resultArr
}


// Runtime: 192 ms, faster than 7.93% of JavaScript online submissions for Combination Sum.
// Memory Usage: 42.5 MB, less than 6.67% of JavaScript online submissions for Combination Sum.
// 처음 풀었던 느렸던 풀이 ㅜㅜ
const combinationSum2 = (candidates, target) => {
  const candidateslen = candidates.length
  const resultArr = []
  const resultSet = new Set()
  const backtracking = (arr, sum) => {
    if (sum > target) {
      return
    }
    if (sum === target) {
      const str = arr.sort().join(',')
      if (!resultSet.has(str)) {
        resultSet.add(str)
        resultArr.push(arr)
      }
    }
    for (let i = 0; i < candidateslen; i += 1) {
      const item = candidates[i]
      const newArr = [...arr]
      newArr.push(item)
      backtracking(newArr, sum + item)
    }
  }
  backtracking([], 0)
  return resultArr
}







