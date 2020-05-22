// https://leetcode.com/problems/construct-quad-tree
// Runtime: 72 ms, faster than 70.83% of JavaScript online submissions for Construct Quad Tree.
// Memory Usage: 41.6 MB, less than 100.00% of JavaScript online submissions for Construct Quad Tree.
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

const getQuarterArr = (arr, rowMin, rowMax, colMin, colMax) => {
  const resultArr = []
  for (let row = rowMin; row < rowMax; row = row + 1 | 0) {
    const rowArr = []
    for (let col = colMin; col < colMax; col = col + 1 | 0) {
      rowArr.push(arr[row][col])
    }
    resultArr.push(rowArr)
  }
  return resultArr
}

const divideArr = arr => {
  const arrLen = arr.length
  const halfLen = arrLen / 2
  const topLeft = getQuarterArr(arr, 0, halfLen, 0, halfLen)
  const topRight = getQuarterArr(arr, 0, halfLen, halfLen, arrLen)
  const bottomLeft = getQuarterArr(arr, halfLen, arrLen, 0, halfLen)
  const bottomRight = getQuarterArr(arr, halfLen, arrLen, halfLen, arrLen)
  return {topLeft, topRight, bottomLeft, bottomRight}
}

/**
 * @param {number[][]} grid
 * @return {Node}
 */
const construct = grid => {
  const gridLen = grid.length
  if (gridLen === 1) {
    return new Node(grid[0][0], true, null, null, null, null)
  }

  let value = grid[0][0]
  const isAllSame = grid.every(subGrid => {
    return subGrid.every(num => num === value)
  })

  if (isAllSame === true) {
    return new Node(value, true, null, null, null, null)
  }

  const {topLeft, topRight, bottomLeft, bottomRight} = divideArr(grid)
  return new Node(0, false, construct(topLeft), construct(topRight), construct(bottomLeft), construct(bottomRight))
}
