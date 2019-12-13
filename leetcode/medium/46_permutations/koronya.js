// https://leetcode.com/problems/permutations
// with backtracking
// Runtime: 56 ms, faster than 99.01% of JavaScript online submissions for Permutations.
// Memory Usage: 36.3 MB, less than 56.00% of JavaScript online submissions for Permutations.
const permute = nums => {
  const resultArr = []
  const backtracking = (candidateArr = [], visitedMap = new Map()) => {
    if (candidateArr.length === nums.length) {
      resultArr.push(candidateArr.slice())
      return
    }
    for (const num of nums) {
      if (!visitedMap.get(num)) {
        visitedMap.set(num, true)
        candidateArr.push(num)
        backtracking(candidateArr, visitedMap)
        candidateArr.pop()
        visitedMap.set(num, false)
      }
    }
  }
  backtracking()
  return resultArr
}

// without backtracking
// Runtime: 76 ms, faster than 28.39% of JavaScript online submissions for Permutations.
// Memory Usage: 38.5 MB, less than 8.00% of JavaScript online submissions for Permutations.

const removeItemWithNewArray = (arr, item) => {
  const newArr = [...arr]
  const index = newArr.indexOf(item)
  if (index > -1) {
    newArr.splice(index, 1)
  }
  return newArr
}

const addItemWithNewArray = (arr, item) => [...arr, item]

const permute2 = nums => {
  const resultArr = []
  const dfs = (accArr, restArr) => {
    if (restArr.length === 0) {
      resultArr.push(accArr.reduce((acc, cur) => [...acc, cur], []))
    } else {
      const restArrLen = restArr.length
      for (let i = 0; i < restArrLen; i += 1) {
        const item = restArr[i]
        dfs(addItemWithNewArray(accArr, item), removeItemWithNewArray(restArr, item))
      }
    }
  }
  dfs([], nums)
  return resultArr
}
