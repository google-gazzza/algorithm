// https://leetcode.com/problems/permutations-ii
// Runtime: 68 ms, faster than 95.61% of JavaScript online submissions for Permutations II.
// Memory Usage: 42.7 MB, less than 11.11% of JavaScript online submissions for Permutations II.

const removeItemWithNewArray = (arr, item) => {
  const newArr = [...arr]
  const index = newArr.indexOf(item)
  if (index > -1) {
    newArr.splice(index, 1)
  }
  return newArr
}

const addItemWithNewArray = (arr, item) => [...arr, item]

const permuteUnique = nums => {
  const resultArr = []
  const checkSet = new Set()
  const backtracking = (candidateArr, restArr) => {
    if (restArr.length === 0) {
      resultArr.push(candidateArr.reduce((acc, cur) => [...acc, cur], []))
    }
    for (const item of restArr) {
      const str = candidateArr.reduce((acc, cur) => acc + cur, '') + item
      if (!checkSet.has(str)) {
        checkSet.add(str)
        backtracking(addItemWithNewArray(candidateArr, item), removeItemWithNewArray(restArr, item))
      }
    }
  }
  backtracking([], nums)
  return resultArr
}

// Runtime: 92 ms, faster than 28.73% of JavaScript online submissions for Permutations II.
// Memory Usage: 42.5 MB, less than 11.11% of JavaScript online submissions for Permutations II.
const permuteUnique2 = nums => {
  const resultArr = []
  const checkSet = new Set()
  const backtracking = (candidateArr, restArr) => {
    const restArrLen = restArr.length
    if (restArrLen === 0) {
      resultArr.push(candidateArr.reduce((acc, cur) => [...acc, cur], []))
    }
    for (let i = 0; i < restArrLen; i += 1) {
      const item = restArr[i]
      const str = candidateArr.reduce((acc, cur) => acc + cur, '') + item
      if (!checkSet.has(str)) {
        checkSet.add(str)
        backtracking(addItemWithNewArray(candidateArr, item), removeItemWithNewArray(restArr, item))
      }
    }
  }
  backtracking([], nums)
  return resultArr
}
