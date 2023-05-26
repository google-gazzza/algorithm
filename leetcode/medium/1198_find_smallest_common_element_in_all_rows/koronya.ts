// [Medium] 1198. Find Smallest Common Element in All Rows
// 1198_find_smallest_common_element_in_all_rows

// https://leetcode.com/problems/find-smallest-common-element-in-all-rows
// Runtime: 92 ms, faster than 100.00% of TypeScript online submissions for Find Smallest Common Element in All Rows.
// Memory Usage: 44.3 MB, less than 80.00% of TypeScript online submissions for Find Smallest Common Element in All Rows.

function smallestCommonElement(mat: number[][]): number {
  const rowLen = mat.length
  const colLen = mat[0].length
  for (let i: number = 0; i < colLen; i += 1) {
    const num = mat[0][i]
    let continueFlag: boolean = true
    for (let j: number = 0; j < rowLen; j += 1) {
      if (mat[j].includes(num) === false) {
        continueFlag = false
        break
      }
    }
    if (continueFlag === true) {
      return num
    }
  }
  return -1
}

smallestCommonElement([
  [1, 2, 3, 4, 5],
  [2, 4, 5, 8, 10],
  [3, 5, 7, 9, 11],
  [1, 3, 5, 7, 9],
]) //?
smallestCommonElement([
  [1, 2, 3],
  [2, 3, 4],
  [2, 3, 5],
]) //?
