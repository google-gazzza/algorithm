// [Easy] 1678. Goal Parser Interpretation
// 1678_goal_parser_interpretation

// https://leetcode.com/problems/goal-parser-interpretation
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Goal Parser Interpretation.
// Memory Usage: 39.5 MB, less than 100.00% of TypeScript online submissions for Goal Parser Interpretation.
function interpret (command: string): string {
  let result: string = ''
  const commandLen: number = command.length
  for (let i: number = 0; i < commandLen; i += 1) {
    const str: string = command[i]
    if (str === 'G') {
      result += str
    } else if (str === 'a') {
      result += 'al'
      i += 2
    } else if (str === ')') {
      result += 'o'
    }
  }

  return result
}
