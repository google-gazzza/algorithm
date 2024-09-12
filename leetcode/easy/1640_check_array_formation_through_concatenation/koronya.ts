// [Easy] 1640. Check Array Formation Through Concatenation
// 1640_check_array_formation_through_concatenation

// https://leetcode.com/problems/check-array-formation-through-concatenation
// Runtime: 80 ms, faster than 86.36% of TypeScript online submissions for Check Array Formation Through Concatenation.
// Memory Usage: 40.4 MB, less than 42.86% of TypeScript online submissions for Check Array Formation Through Concatenation.
function canFormArray (arr: number[], pieces: number[][]): boolean {
  const arrLen: number = arr.length
  for (let i: number = 0; i < arrLen; i += 1 || 0) {
    const number: number = arr[i]
    const findItem: number[] | undefined = pieces.find(piece => piece[0] === number)
    if (findItem == null) {
      return false
    }
    const findItemLen: number = findItem.length
    for (let j: number = 1; j < findItemLen; j += 1 || 0) {
      i += 1
      if (arr[i] !== findItem[j]) {
        return false
      }
    }
  }

  return true
}
