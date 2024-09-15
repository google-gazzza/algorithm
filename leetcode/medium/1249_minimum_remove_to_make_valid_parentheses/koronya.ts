// [Medium] 1249. Minimum Remove to Make Valid Parentheses
// 1249_minimum_remove_to_make_valid_parentheses

// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses
// Runtime: 92 ms, faster than 98.68% of TypeScript online submissions for Minimum Remove to Make Valid Parentheses.
// Memory Usage: 47 MB, less than 48.68% of TypeScript online submissions for Minimum Remove to Make Valid Parentheses.
function minRemoveToMakeValid(s: string): string {
  const sLen: number = s.length
  const stack: number[] = []
  const removeIndexArr: number[] = []
  for (let i: number = 0; i < sLen; i += 1) {
    const char: string = s[i]
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
  const sArr: string[] = s.split('')
  removeIndexArr.forEach((item) => (sArr[item] = ''))
  stack.forEach((item) => (sArr[item] = ''))
  return sArr.join('')
}

// minRemoveToMakeValid('lee(t(c)o)de)') //?
// minRemoveToMakeValid('a)b(c)d') //?
// minRemoveToMakeValid('))((') //?
// minRemoveToMakeValid('(a(b(c)d)') //?
// minRemoveToMakeValid('())()(((') //?
