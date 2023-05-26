// [Medium] 994. Rotting Oranges
// 994_rotting_oranges

// https://leetcode.com/problems/rotting-oranges
// Runtime: 92 ms, faster than 68.46% of JavaScript online submissions for Rotting Oranges.
// Memory Usage: 41.7 MB, less than 32.65% of JavaScript online submissions for Rotting Oranges.

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
  const candidateArr = []
  const freshSet = new Set()
  const rowLen = grid.length
  const colLen = grid[0].length
  let count = -1
  const tempArr = []
  for (let row = 0; row < rowLen; row += 1 || 0) {
    for (let col = 0; col < colLen; col += 1 || 0) {
      const item = grid[row][col]
      const itemIndex = `${row},${col}`
      if (item === 2) {
        tempArr.push(itemIndex)
      } else if (item === 1) {
        freshSet.add(itemIndex)
      }
    }
  }
  if (tempArr.length === 0 && freshSet.size === 0) {
    return 0
  }
  candidateArr.push(tempArr)
  candidateArr //?
  console.log('tempArr: ', tempArr)

  while (candidateArr.length > 0) {
    count += 1
    const item = candidateArr.shift()
    const tempArr = []
    item.forEach((kkk) => {
      const [row, col] = kkk.split(',')
      const directions = [`${row},${Number(col) - 1}`, `${Number(row) - 1},${col}`, `${row},${Number(col) + 1}`, `${Number(row) + 1},${col}`]
      directions.forEach((direction) => {
        if (freshSet.has(direction) === true) {
          tempArr.push(direction)
          freshSet.delete(direction)
        }
      })
    })
    if (tempArr.length > 0) {
      candidateArr.push(tempArr)
    }
  }
  if (freshSet.size > 0) {
    return -1
  }

  return count
}

// orangesRotting([
//   [2, 1, 1],
//   [1, 1, 0],
//   [0, 1, 1],
// ]) //?
// orangesRotting([
//   [2, 1, 1],
//   [0, 1, 1],
//   [1, 0, 1],
// ]) //?
// orangesRotting([[0, 2]]) //?
// orangesRotting([[0]]) //?
orangesRotting([[0, 2, 2]]) //?
