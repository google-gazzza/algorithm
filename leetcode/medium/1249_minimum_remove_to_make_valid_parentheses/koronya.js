// [Medium] 1249. Minimum Remove to Make Valid Parentheses
// 1249_minimum_remove_to_make_valid_parentheses

// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses
// Runtime: 96 ms, faster than 85.07% of JavaScript online submissions for Minimum Remove to Make Valid Parentheses.
// Memory Usage: 46.2 MB, less than 51.03% of JavaScript online submissions for Minimum Remove to Make Valid Parentheses.

/**
 * @param {string} s
 * @return {string}
 */

const minRemoveToMakeValid = function (s) {
  const sLen = s.length
  const stack = []
  const removeIndexArr = []
  for (let i = 0; i < sLen; i += 1 || 0) {
    const char = s[i]
    if (char === '(') {
      stack.push(i)
    } else if (char === ')') {
      if (stack.length > 0) {
        stack.pop()
      } else {
        removeIndexArr.push(i)
      }
    }
  }
  const sArr = s.split('')
  removeIndexArr.forEach((item) => (sArr[item] = ''))
  stack.forEach((item) => (sArr[item] = ''))
  return sArr.join('')
}

// minRemoveToMakeValid('lee(t(c)o)de)') //?
// minRemoveToMakeValid('a)b(c)d') //?
// minRemoveToMakeValid('))((') //?
// minRemoveToMakeValid('(a(b(c)d)') //?
// minRemoveToMakeValid('())()(((') //?
