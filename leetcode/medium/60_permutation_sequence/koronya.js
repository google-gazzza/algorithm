// https://leetcode.com/problems/permutation-sequence
// Runtime: 1748 ms, faster than 21.78% of JavaScript online submissions for Permutation Sequence.
// Memory Usage: 35.4 MB, less than 33.33% of JavaScript online submissions for Permutation Sequence.

const getNArr = n => {
  const arr = []
  for (let i = 1; i <= n ; i += 1) {
    arr.push(i)
  }
  return arr
}

const permute = (nums, limit) => {
  const numsLen = nums.length
  let resultStr = ''
  let count = 0
  let isEnd = false
  const backtracking = (candidateArr = [], visitedMap = new Map()) => {
    if (candidateArr.length === numsLen) {
      count += 1
      if (count === limit) {
        resultStr = [...candidateArr].join('')
        isEnd = true
      }
      return
    }
    for (const num of nums) {
      if (!visitedMap.get(num) && !isEnd) {
        visitedMap.set(num, true)
        candidateArr.push(num)
        backtracking(candidateArr, visitedMap)
        candidateArr.pop()
        visitedMap.set(num, false)
      }
    }
  }
  backtracking()
  return resultStr
}

const getPermutation = (n, k) => {
  const nArr = getNArr(n)
  return permute(nArr, k)
}
