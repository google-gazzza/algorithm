// [Easy] 1232. Check If It Is a Straight Line
// 1232_check_if_it_is_a_straight_line

// https://leetcode.com/problems/check-if-it-is-a-straight-line
// Runtime: 84 ms, faster than 50.00% of TypeScript online submissions for Check If It Is a Straight Line.
// Memory Usage: 40 MB, less than 100.00% of TypeScript online submissions for Check If It Is a Straight Line.
function checkStraightLine (coordinates: number[][]): boolean {
  const startX: number = coordinates[0][0]
  const startY: number = coordinates[0][1]
  const divider: number = coordinates[1][1] - startY
  if (divider === 0) {
    return coordinates.every(item => item[1] === startY)
  }

  const gradient: number = (coordinates[1][0] - startX) / divider
  const coordinatesLen: number = coordinates.length
  for (let i: number = 2; i < coordinatesLen; i += 1 || 0) {
    const point: number[] = coordinates[i]
    if (gradient !== (point[0] - startX) / (point[1] - startY)) {
      return false
    }
  }
  return true
}
