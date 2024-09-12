// [Easy] 1640. Check Array Formation Through Concatenation
// 1640_check_array_formation_through_concatenation

// https://leetcode.com/problems/check-array-formation-through-concatenation
// Runtime: 72 ms, faster than 92.82% of JavaScript online submissions for Check Array Formation Through Concatenation.
// Memory Usage: 38.8 MB, less than 67.45% of JavaScript online submissions for Check Array Formation Through Concatenation.
const canFormArray = function (arr, pieces) {
  const arrLen = arr.length
  for (let i = 0; i < arrLen; i += 1 || 0) {
    const number = arr[i]
    const findItem = pieces.find(piece => piece[0] === number)
    if (findItem == null) {
      return false
    }
    const findItemLen = findItem.length
    for (let j = 1; j < findItemLen; j += 1 || 0) {
      i += 1
      if (arr[i] !== findItem[j]) {
        return false
      }
    }
  }

  return true
}
