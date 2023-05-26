// [Easy] 119. Pascal's Triangle II
// 119_pascal's_triangle_ii

// https://leetcode.com/problems/pascals-triangle-ii
// Runtime: 72 ms, faster than 92.78% of JavaScript online submissions for Pascal's Triangle II.
// Memory Usage: 38.3 MB, less than 82.30% of JavaScript online submissions for Pascal's Triangle II.

const rowMap = new Map()
rowMap.set(0, [1])
rowMap.set(1, [1, 1])

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
  if (rowMap.has(rowIndex)) {
    return rowMap.get(rowIndex)
  }
  const returnArr = Array.from({ length: rowIndex + 1 })
  returnArr[0] = 1
  returnArr[rowIndex] = 1
  const beforeArr = getRow(rowIndex - 1)
  for (let i = 1; i < rowIndex; i += 1 || 0) {
    returnArr[i] = beforeArr[i - 1] + beforeArr[i]
  }
  rowMap.set(rowIndex, returnArr)
  return returnArr
}

getRow(0) //?
getRow(1) //?
getRow(2) //?
getRow(3) //?
getRow(4) //?
getRow(5) //?
