// https://leetcode.com/problems/delete-columns-to-make-sorted
// Runtime: 80 ms, faster than 38.94% of JavaScript online submissions for Delete Columns to Make Sorted.
// Memory Usage: 39.8 MB, less than 40.00% of JavaScript online submissions for Delete Columns to Make Sorted.
const minDeletionSize = A => {
  const ALen = A.length
  const itemLen = A[0].length;
  const deleteArr = []

  for (let colIndex = 0; colIndex < itemLen; colIndex += 1) {
    let before = Number.MIN_SAFE_INTEGER
    for (let rowIndex = 0; rowIndex < ALen; rowIndex += 1) {
      if (before > A[rowIndex][colIndex]) {
        deleteArr.push(colIndex)
        break
      }
      before = A[rowIndex][colIndex]
    }
  }
  return deleteArr.length
}
