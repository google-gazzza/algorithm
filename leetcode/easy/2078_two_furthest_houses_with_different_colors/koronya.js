// [Easy] 2078. Two Furthest Houses With Different Colors
// 2078_two_furthest_houses_with_different_colors

// https://leetcode.com/problems/two-furthest-houses-with-different-colors
// Runtime: 77 ms, faster than 57.87% of JavaScript online submissions for Two Furthest Houses With Different Colors.
// Memory Usage: 38.8 MB, less than 67.59% of JavaScript online submissions for Two Furthest Houses With Different Colors.

/**
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance = function (colors) {
  const endIndex = colors.length - 1
  const startColor = colors[0]
  const endColor = colors[endIndex]

  if (startColor !== endColor) {
    return endIndex
  }

  let indexOfFarFromEnd = 0
  while (startColor === colors[indexOfFarFromEnd]) {
    indexOfFarFromEnd += 1
  }

  let indexOfFarFromStart = endIndex
  while (endColor === colors[indexOfFarFromStart]) {
    indexOfFarFromStart -= 1
  }

  return Math.max(indexOfFarFromStart, endIndex - indexOfFarFromEnd)
}

maxDistance([1, 1, 1, 6, 1, 1, 1]) //?
maxDistance([1, 8, 3, 8, 3]) //?
maxDistance([0, 1]) //?
