// [Easy] 1496. Path Crossing
// 1496_path_crossing

// https://leetcode.com/problems/path-crossing
// Runtime: 68 ms, faster than 94.35% of JavaScript online submissions for Path Crossing.
// Memory Usage: 36.9 MB, less than 50.43% of JavaScript online submissions for Path Crossing.
const isPathCrossing = path => {
  const pathLen = path.length
  const visitedSet = new Set()
  let x = 0
  let y = 0
  visitedSet.add(`${x}-${y}`)
  const gogo = str => {
    switch (str) {
      case 'N':
        y += 1
        break
      case 'E':
        x += 1
        break
      case 'S':
        y -= 1
        break
      case 'W':
        x -= 1
        break
      default:
        break
    }
  }
  for (let i = 0; i < pathLen; i = i + 1 | 0) {
    gogo(path[i])
    const ddd = `${x}-${y}`
    if (visitedSet.has(ddd)) {
      return true
    }
    visitedSet.add(ddd)
  }

  return false
}
