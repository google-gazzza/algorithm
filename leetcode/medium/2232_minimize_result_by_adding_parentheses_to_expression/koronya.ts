// [Medium] 2232. Minimize Result by Adding Parentheses to Expression
// 2232_minimize_result_by_adding_parentheses_to_expression

// https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression
// Runtime: 101 ms, faster than 50.00% of TypeScript online submissions for Minimize Result by Adding Parentheses to Expression.
// Memory Usage: 43 MB, less than 94.44% of TypeScript online submissions for Minimize Result by Adding Parentheses to Expression.

function minimizeResult(expression: string): string {
  const [s1, s2] = expression.split('+')
  let ret = Number.MAX_SAFE_INTEGER
  let reta = [0, 0]
  const s1Len = s1.length
  const s2Len = s2.length
  for (let i: number = 0; i < s1Len; i += 1) {
    for (let j: number = 0; j < s2Len; j += 1) {
      let u1 = i === 0 ? 1 : Number(s1.slice(0, i))
      let u2 = Number(s1.slice(i))
      let v1 = Number(s2.slice(0, j + 1))
      let v2 = j === s2Len - 1 ? 1 : Number(s2.slice(j + 1))
      const val = u1 * (u2 + v1) * v2
      if (val < ret) {
        ret = val
        reta = [i, j]
      }
    }
  }
  return s1.slice(0, reta[0]) + '(' + s1.slice(reta[0]) + '+' + s2.slice(0, reta[1] + 1) + ')' + s2.slice(reta[1] + 1)
}
