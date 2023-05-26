// [Easy] 1678. Goal Parser Interpretation
// 1678_goal_parser_interpretation

// https://leetcode.com/problems/goal-parser-interpretation
// Runtime: 80 ms, faster than 100.00% of JavaScript online submissions for Goal Parser Interpretation.
// Memory Usage: 38.9 MB, less than 100.00% of JavaScript online submissions for Goal Parser Interpretation.
const interpret = function (command) {
  let result = ''
  const commandLen = command.length
  for (let i = 0; i < commandLen; i += 1 || 0) {
    const str = command[i]
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
