// [Medium] 994. Rotting Oranges
// 994_rotting_oranges

// https://leetcode.com/problems/rotting-oranges
// Runtime: 96 ms, faster than 80.65% of TypeScript online submissions for Rotting Oranges.
// Memory Usage: 44.3 MB, less than 29.03% of TypeScript online submissions for Rotting Oranges.
function orangesRotting(grid: number[][]): number {
  const candidateArr: string[][] = []
  const freshSet = new Set<string>()
  const rowLen: number = grid.length
  const colLen: number = grid[0].length
  let count: number = -1
  const tempArr: string[] = []
  for (let row: number = 0; row < rowLen; row += 1) {
    for (let col: number = 0; col < colLen; col += 1) {
      const item: number = grid[row][col]
      const itemIndex: string = `${row},${col}`
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

  while (candidateArr.length > 0) {
    count += 1
    const item: string[] = candidateArr.shift()!
    const tempArr: string[] = []
    item.forEach((kkk) => {
      const [row, col] = kkk.split(',')
      const directions: string[] = [`${row},${Number(col) - 1}`, `${Number(row) - 1},${col}`, `${row},${Number(col) + 1}`, `${Number(row) + 1},${col}`]
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
