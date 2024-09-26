// [Medium] 2120. Execution of All Suffix Instructions Staying in a Grid
// 2120_execution_of_all_suffix_instructions_staying_in_a_grid

// https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid
// Runtime: 233 ms, faster than 36.00% of TypeScript online submissions for Execution of All Suffix Instructions Staying in a Grid.
// Memory Usage: 42.4 MB, less than 76.00% of TypeScript online submissions for Execution of All Suffix Instructions Staying in a Grid.

function executeInstructions(n: number, startPos: number[], s: string): number[] {
  const isCollide = (row: number, col: number, direction: string): boolean => {
    if ((direction === 'L' && col === 0) || (direction === 'U' && row === 0) || (direction === 'R' && col === n - 1) || (direction === 'D' && row === n - 1)) {
      return true
    }
    return false
  }
  const sLen: number = s.length
  return s.split('').map((_, index) => {
    let [prevRow, prevCol] = startPos
    let count: number = 0

    for (let i: number = index; i < sLen; i += 1) {
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
