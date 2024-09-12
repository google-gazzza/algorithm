// [Easy] 1232. Check If It Is a Straight Line
// 1232_check_if_it_is_a_straight_line

// https://leetcode.com/problems/check-if-it-is-a-straight-line
// Runtime: 80 ms, faster than 76.44% of JavaScript online submissions for Check If It Is a Straight Line.
// Memory Usage: 40.3 MB, less than 60.34% of JavaScript online submissions for Check If It Is a Straight Line.
const checkStraightLine = function (coordinates) {
  const startX = coordinates[0][0]
  const startY = coordinates[0][1]
  const divider = coordinates[1][1] - startY
  if (divider === 0) {
    return coordinates.every(item => item[1] === startY)
  }

  const gradient = (coordinates[1][0] - startX) / divider
  const coordinatesLen = coordinates.length
  for (let i = 2; i < coordinatesLen; i += 1 || 0) {
    const point = coordinates[i]
    if (gradient !== (point[0] - startX) / (point[1] - startY)) {
      return false
    }
  }
  return true
}
