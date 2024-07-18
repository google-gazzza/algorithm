// [Easy] 119. Pascal's Triangle II
// 119_pascal's_triangle_ii

// https://leetcode.com/problems/pascals-triangle-ii
// Runtime: 76 ms, faster than 92.00% of TypeScript online submissions for Pascal's Triangle II.
// Memory Usage: 38.9 MB, less than 94.00% of TypeScript online submissions for Pascal's Triangle II.

const rowMap = new Map<number, number[]>()
rowMap.set(0, [1])
rowMap.set(1, [1, 1])

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex: number): number[] {
  if (rowMap.has(rowIndex)) {
    return rowMap.get(rowIndex)!
  }
  const returnArr: number[] = Array.from({ length: rowIndex + 1 })
  returnArr[0] = 1
  returnArr[rowIndex] = 1
  const beforeArr: number[] = getRow(rowIndex - 1)
  for (let i: number = 1; i < rowIndex; i += 1) {
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
