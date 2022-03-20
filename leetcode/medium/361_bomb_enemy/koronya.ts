// [Medium] 361. Bomb Enemy
// 361_bomb_enemy

// https://leetcode.com/problems/bomb-enemy
// Runtime: 4054 ms, faster than 100.00% of TypeScript online submissions for Bomb Enemy.
// Memory Usage: 48.8 MB, less than 100.00% of TypeScript online submissions for Bomb Enemy.

function maxKilledEnemies(grid: string[][]): number {
  const rowLen = grid.length
  const colLen = grid[0].length

  const getRowDeath = (row: number, col: number): number => {
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
  const getColDeath = (row: number, col: number): number => {
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
  const getCount = (row: number, col: number): number => {
    if (grid[row][col] === 'E' || grid[row][col] === 'W') {
      return 0
    }
    return getRowDeath(row, col) + getColDeath(row, col)
  }

  let result = 0
  for (let row: number = 0; row < rowLen; row += 1) {
    for (let col: number = 0; col < colLen; col += 1) {
      let count = getCount(row, col)
      result = Math.max(result, count)
    }
  }

  return result
}
