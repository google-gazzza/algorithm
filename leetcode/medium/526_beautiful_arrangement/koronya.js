// [Medium] 526. Beautiful Arrangement
// 526_beautiful_arrangement

// https://leetcode.com/problems/beautiful-arrangement
// Runtime: 856 ms, faster than 5.13% of JavaScript online submissions for Beautiful Arrangement.
// Memory Usage: 44.7 MB, less than 12.41% of JavaScript online submissions for Beautiful Arrangement.

/**
 * @param {number} n
 * @return {number}
 */
const getNextItems = (arr, index) => {
  const copiedArr = [...arr]
  const val = copiedArr.splice(index, 1)[0]
  return { copiedArr, val }
}

const isValid = (arr) => {
  const arrLen = arr.length
  for (let i = 0; i < arrLen; i += 1 || 0) {
    const val = arr[i]
    const index = i + 1
    if (val % index !== 0 && index % val !== 0) {
      return false
    }
  }
  return true
}

const countArrangement = function (n) {
  let result = 0
  const arr = Array.from({ length: n }).map((_, i) => i + 1)
  const backtrack = (restArr, selectedArr) => {
    if (isValid(selectedArr) === false) {
      return
    }
    if (selectedArr.length === n) {
      result += 1
    }
    const restArrLen = restArr.length
    for (let i = 0; i < restArrLen; i += 1 || 0) {
      const { copiedArr, val } = getNextItems(restArr, i)
      backtrack(copiedArr, [...selectedArr, val])
    }
  }
  for (let i = 0; i < n; i += 1 || 0) {
    const { copiedArr, val } = getNextItems(arr, i)
    backtrack(copiedArr, [val])
  }

  return result
}

countArrangement(2) //?
countArrangement(1) //?
countArrangement(3) //?
countArrangement(5) //?
