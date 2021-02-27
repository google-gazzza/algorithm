// [Medium] 789. Escape The Ghosts
// 789_escape_the_ghosts

// https://leetcode.com/problems/escape-the-ghosts
// Runtime: 80 ms, faster than 80.00% of JavaScript online submissions for Escape The Ghosts.
// Memory Usage: 38.9 MB, less than 50.00% of JavaScript online submissions for Escape The Ghosts.

const getDistance = (p1, p2) => Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1])

/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
const escapeGhosts = function (ghosts, target) {
  const diffPlayer = getDistance([0, 0], target)
  const diffGhosts = ghosts.map((ghost) => getDistance(ghost, target)).sort((a, b) => a - b)

  return diffPlayer < diffGhosts[0]
}

escapeGhosts(
  [
    [1, 0],
    [0, 3],
  ],
  [0, 1],
) //?

escapeGhosts([[1, 0]], [2, 0]) //?
escapeGhosts([[2, 0]], [1, 0]) //?
escapeGhosts(
  [
    [5, 0],
    [-10, -2],
    [0, -5],
    [-2, -2],
    [-7, 1],
  ],
  [7, 7],
) //?

escapeGhosts(
  [
    [-1, 0],
    [0, 1],
    [-1, 0],
    [0, 1],
    [-1, 0],
  ],
  [0, 0],
) //?

escapeGhosts(
  [
    [1, 8],
    [-9, 0],
    [-7, -6],
    [4, 3],
    [1, 3],
  ],
  [6, -9],
) //?
