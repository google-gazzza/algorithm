// [Medium] 2120. Execution of All Suffix Instructions Staying in a Grid
// 2120_execution_of_all_suffix_instructions_staying_in_a_grid

// https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid
// Runtime: 112 ms, faster than 90.16% of JavaScript online submissions for Execution of All Suffix Instructions Staying in a Grid.
// Memory Usage: 41.3 MB, less than 80.87% of JavaScript online submissions for Execution of All Suffix Instructions Staying in a Grid.

/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
const executeInstructions = function (n, startPos, s) {
  const isCollide = (row, col, direction) => {
    if ((direction === 'L' && col === 0) || (direction === 'U' && row === 0) || (direction === 'R' && col === n - 1) || (direction === 'D' && row === n - 1)) {
      return true
    }
    return false
  }
  const sLen = s.length
  return s.split('').map((_, index) => {
    let [prevRow, prevCol] = startPos
    let count = 0

    for (let i = index; i < sLen; i += 1 || 0) {
      const direction = s[i]
      if (isCollide(prevRow, prevCol, direction) === false) {
        count += 1
        switch (direction) {
          default:
          case 'L':
            prevCol -= 1
            break
          case 'R':
            prevCol += 1
            break
          case 'U':
            prevRow -= 1
            break
          case 'D':
            prevRow += 1
            break
        }
      } else {
        return count
      }
    }
    return count
  })
}

executeInstructions(3, [0, 1], 'RRDDLU') //?
executeInstructions(2, [1, 1], 'LURD') //?
executeInstructions(1, [0, 0], 'LURD') //?
