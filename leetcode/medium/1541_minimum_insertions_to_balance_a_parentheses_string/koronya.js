// [Medium] 1541. Minimum Insertions to Balance a Parentheses String\
// 1541_minimum_insertions_to_balance_a_parentheses_string

// https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string
// Runtime: 76 ms, faster than 94.74% of JavaScript online submissions for Minimum Insertions to Balance a Parentheses String.
// Memory Usage: 42.6 MB, less than 77.19% of JavaScript online submissions for Minimum Insertions to Balance a Parentheses String.

/**
 * @param {string} s
 * @return {number}
 */
const minInsertions = function (s) {
  let result = 0
  const sLen = s.length
  let stackCount = 0
  let continuousCloseCount = 0
  for (let i = 0; i < sLen; i += 1 || 0) {
    const str = s[i]
    if (str === '(') {
      if (continuousCloseCount % 2 === 1 && stackCount > 0) {
        result += 1
        stackCount -= 1
      }
      stackCount += 2
      continuousCloseCount = 0
    } else {
      continuousCloseCount += 1
      if (stackCount > 0) {
        stackCount -= 1
      } else {
        result += 1
        stackCount += 1
      }
    }
  }
  result += stackCount

  return result
}

// minInsertions('(()))') //?
// minInsertions('())') //?
// minInsertions('))())(') //?
// minInsertions('(()))(()))()())))') //?
// minInsertions('(()))()())))') //?
// minInsertions('(())))))())()()(())())))(())))(())()((()())())(((()') //?
// minInsertions('))(()()))()))))))()())()(())()))))()())(()())))()(') //?
// to be 7 but 4
minInsertions('))(()()))()))))))') //?

minInsertions('(()()))()))))))') //?
minInsertions('(()()))())))') //?
// minInsertions('(()()))()))))))') //?
// minInsertions('))(()()))()))))))') //?
// minInsertions('))()))))))') //?
