// [Medium] 695. Max Area of Island
// 695_max_area_of_island

// https://leetcode.com/problems/max-area-of-island
// Runtime: 128 ms, faster than 28.10% of JavaScript online submissions for Max Area of Island.
// Memory Usage: 43.7 MB, less than 33.33% of JavaScript online submissions for Max Area of Island.
const maxAreaOfIsland = grid => {
  let islandCount = 0
  let maxCount = 0
  const rowLen = grid.length
  if (rowLen === 0) {
    return islandCount
  }
  const colLen = grid[0].length
  const infoArr = Array.from({length: rowLen}).map(() => Array.from({length: colLen}).map(() => ({islandNumber: -1, visited: false})))

  const getNextObj = (row, col) => {
    if (grid[row][col] !== 1) {
      return null
    }
    const info = infoArr[row][col]
    const {islandNumber, visited} = info
    if (visited === true) {
      return null
    }
    info.visited = true
    return islandNumber === -1
      ? {row, col}
      : null
  }

  const getLeft = (i, j) => {
    if (j === 0) {
      return null
    }
    const row = i
    const col = j - 1
    return getNextObj(row, col)
  }
  const getRight = (i, j) => {
    if (j === colLen - 1) {
      return null
    }
    const row = i
    const col = j + 1
    return getNextObj(row, col)
  }
  const getUp = (i, j) => {
    if (i === 0) {
      return null
    }
    const row = i - 1
    const col = j
    return getNextObj(row, col)
  }
  const getDown = (i, j) => {
    if (i === rowLen - 1) {
      return null
    }
    const row = i + 1
    const col = j
    return getNextObj(row, col)
  }

  const pushItemToArr = (item, arr) => {
    if (item !== null) {
      arr.push(item)
    }
  }

  const getNextTarget = (row, col) => {
    const resultArr = []
    pushItemToArr(getLeft(row, col), resultArr)
    pushItemToArr(getRight(row, col), resultArr)
    pushItemToArr(getUp(row, col), resultArr)
    pushItemToArr(getDown(row, col), resultArr)
    return resultArr
  }

  const traversal = (row, col) => {
    islandCount += 1
    let queue = []
    let target = {row, col}
    let presendIslandCount = 0

    while (target != null) {
      const {row, col} = target
      infoArr[row][col].islandNumber = islandCount
      const candidateArr = getNextTarget(row, col)
      if (candidateArr.length > 0) {
        queue = [...queue, ...candidateArr]
      } 
      target = queue.shift()
      presendIslandCount += 1
    }
    maxCount = Math.max(maxCount, presendIslandCount)
  }

  for (let i = 0; i < rowLen; i = i + 1 | 0) {
    for (let j = 0; j < colLen; j = j + 1 | 0) {
      const value = grid[i][j]
      if (value === 1) {
        if (infoArr[i][j].islandNumber === -1) {
          traversal(i, j)
        }
      }
    }
  }

  return maxCount
}
