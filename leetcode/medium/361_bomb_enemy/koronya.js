// [Medium] 361. Bomb Enemy
// 361_bomb_enemy

// https://leetcode.com/problems/bomb-enemy
// Runtime: 2592 ms, faster than 14.71% of JavaScript online submissions for Bomb Enemy.
// Memory Usage: 47.3 MB, less than 61.76% of JavaScript online submissions for Bomb Enemy.

/**
 * @param {character[][]} grid
 * @return {number}
 */
const maxKilledEnemies = function (grid) {
  const rowLen = grid.length
  const colLen = grid[0].length

  const getRowDeath = (row, col) => {
    let count = 0
    let targetIndex = col + 1
    let target = grid[row][targetIndex]
    while (target !== 'W' && targetIndex < colLen) {
      if (target === 'E') {
        count += 1
      }
      targetIndex += 1
      target = grid[row][targetIndex]
    }
    targetIndex = col - 1
    target = grid[row][targetIndex]
    while (target !== 'W' && targetIndex >= 0) {
      if (target === 'E') {
        count += 1
      }
      targetIndex -= 1
      target = grid[row][targetIndex]
    }

    return count
  }
  const getColDeath = (row, col) => {
    let count = 0
    let targetIndex = row + 1
    let target = grid[targetIndex]?.[col]
    while (target !== 'W' && targetIndex < rowLen) {
      if (target === 'E') {
        count += 1
      }
      targetIndex += 1
      target = grid[targetIndex]?.[col]
    }
    targetIndex = row - 1
    target = grid[targetIndex]?.[col]
    while (target !== 'W' && targetIndex >= 0) {
      if (target === 'E') {
        count += 1
      }
      targetIndex -= 1
      target = grid[targetIndex]?.[col]
    }

    return count
  }
  const getCount = (row, col) => {
    if (grid[row][col] === 'E' || grid[row][col] === 'W') {
      return 0
    }
    return getRowDeath(row, col) + getColDeath(row, col)
  }

  let result = 0
  for (let row = 0; row < rowLen; row += 1 || 0) {
    for (let col = 0; col < colLen; col += 1 || 0) {
      let count = getCount(row, col)
      result = Math.max(result, count)
    }
  }

  return result
}

maxKilledEnemies([
  ['0', 'E', '0', '0'],
  ['E', '0', 'W', 'E'],
  ['0', 'E', '0', '0'],
])
maxKilledEnemies([
  ['W', 'W', 'W'],
  ['0', '0', '0'],
  ['E', 'E', 'E'],
])
maxKilledEnemies([['0', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'W']])
